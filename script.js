// 开场文字动画控制
let currentLine = 1;
const totalLines = 3;
let isAnimating = false;

// 当前选中的天数
let currentDay = 1;

// DOM元素
const introScreen = document.getElementById('introScreen');
const mainContainer = document.getElementById('mainContainer');
const calendarGrid = document.getElementById('calendarGrid');
const dayModal = document.getElementById('dayModal');
const commentsModal = document.getElementById('commentsModal');
const dayTitle = document.getElementById('dayTitle');
const dayNumber = document.getElementById('dayNumber');
const memoryContent = document.getElementById('memoryContent');
const closeModal = document.getElementById('closeModal');
const closeComments = document.getElementById('closeComments');
const prevDayBtn = document.getElementById('prevDayBtn');
const nextDayBtn = document.getElementById('nextDayBtn');
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentsList = document.getElementById('commentsList');

// 初始化函数
function init() {
    // 设置开场文字点击事件
    introScreen.addEventListener('click', handleIntroClick);
    
    // 初始化日历
    createCalendar();
    
    // 设置模态框事件
    closeModal.addEventListener('click', () => {
        dayModal.classList.remove('active');
    });
    
    closeComments.addEventListener('click', () => {
        commentsModal.classList.remove('active');
    });
    
    // 设置日期导航事件
    prevDayBtn.addEventListener('click', showPreviousDay);
    nextDayBtn.addEventListener('click', showNextDay);
    
    // 设置评论区提交事件
    submitComment.addEventListener('click', submitNewComment);
    
    // 设置键盘事件
    document.addEventListener('keydown', handleKeyboard);
}

// 处理开场文字点击
function handleIntroClick() {
    if (isAnimating) return;
    
    if (currentLine < totalLines) {
        // 切换到下一行文字
        animateTextTransition(currentLine, currentLine + 1);
        currentLine++;
    } else if (currentLine === totalLines) {
        // 直接过渡到日历页面
        transitionToCalendar();
    }
}

// 文字过渡动画
function animateTextTransition(currentId, nextId) {
    isAnimating = true;
    const currentEl = document.getElementById(`line${currentId}`);
    const nextEl = document.getElementById(`line${nextId}`);
    
    // 当前文字消散
    currentEl.style.opacity = '0';
    currentEl.style.transform = 'translate(-50%, -50%) translateY(-20px)';
    
    // 下一行文字出现
    setTimeout(() => {
        currentEl.classList.remove('active');
        nextEl.classList.add('active');
        
        // 显示文字
        setTimeout(() => {
            nextEl.style.opacity = '1';
            nextEl.style.transform = 'translate(-50%, -50%) translateY(0)';
            
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }, 50);
    }, 800);
}

// 过渡到日历页面（简化版）
function transitionToCalendar() {
    isAnimating = true;
    
    // 最后一行文字淡出
    const lastLine = document.getElementById('line3');
    lastLine.style.opacity = '0';
    lastLine.style.transform = 'translate(-50%, -50%) translateY(-30px)';
    lastLine.style.transition = 'all 1.2s ease';
    
    // 整个开场屏幕淡出
    setTimeout(() => {
        introScreen.style.opacity = '0';
        introScreen.style.transition = 'opacity 1s ease';
        
        // 显示主日历页面
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContainer.style.opacity = '0';
            mainContainer.style.display = 'block';
            
            // 淡入主页面
            setTimeout(() => {
                mainContainer.style.transition = 'opacity 1s ease';
                mainContainer.style.opacity = '1';
                isAnimating = false;
            }, 50);
        }, 1000);
    }, 1200);
}

// 创建日历（保持不变）
function createCalendar() {
    calendarGrid.innerHTML = '';
    
    for (let i = 1; i <= 100; i++) {
        const dayCircle = document.createElement('div');
        dayCircle.className = 'day-circle';
        dayCircle.textContent = i;
        dayCircle.dataset.day = i;
        
        // 检查是否有记忆内容
        if (window.dayData && window.dayData[i] && window.dayData[i].memory) {
            dayCircle.classList.add('has-memory');
        }
        
        // 第100天特殊样式
        if (i === 100) {
            dayCircle.classList.add('day-100');
        }
        
        // 点击事件
        dayCircle.addEventListener('click', () => {
            if (i === 100) {
                // 第100天显示评论区
                showCommentsModal();
            } else {
                showDayModal(i);
            }
        });
        
        calendarGrid.appendChild(dayCircle);
    }
}

// 显示日期详情模态框
function showDayModal(day) {
    currentDay = day;
    
    // 更新模态框内容
    dayNumber.textContent = day;
    dayTitle.textContent = `第 ${day} 天`;
    
    // 获取当天数据
    const dayInfo = window.dayData && window.dayData[day] ? window.dayData[day] : {};
    
    // 显示或隐藏照片
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.innerHTML = ''; // 清空之前的照片
    
    if (dayInfo.photo) {
        // 如果有照片，显示照片
        const img = document.createElement('img');
        img.className = 'day-photo';
        img.src = dayInfo.photo;
        img.alt = `第${day}天的照片`;
        img.onerror = function() {
            // 如果照片加载失败，不显示任何提示，直接隐藏照片区域
            photoContainer.style.display = 'none';
        };
        photoContainer.appendChild(img);
        photoContainer.style.display = 'block'; // 确保显示
    } else {
        // 没有照片，直接隐藏照片区域
        photoContainer.style.display = 'none';
    }
    
    // 显示记忆内容
    memoryContent.textContent = dayInfo.memory || "这一天还没有记录...";
    
    // 更新导航按钮状态
    prevDayBtn.disabled = day <= 1;
    nextDayBtn.disabled = day >= 100;
    
    // 显示模态框
    dayModal.classList.add('active');
    
    // 更新日历中的活动状态
    updateActiveDay(day);
}

// 显示评论区
function showCommentsModal() {
    // 加载评论
    loadComments();
    
    // 显示评论模态框
    commentsModal.classList.add('active');
}

// 显示前一天
function showPreviousDay() {
    if (currentDay > 1) {
        showDayModal(currentDay - 1);
    }
}

// 显示后一天
function showNextDay() {
    if (currentDay < 100) {
        showDayModal(currentDay + 1);
    }
}

// 更新日历中的活动状态
function updateActiveDay(day) {
    document.querySelectorAll('.day-circle').forEach(circle => {
        circle.classList.remove('active');
        if (parseInt(circle.dataset.day) === day) {
            circle.classList.add('active');
        }
    });
}

// 提交新评论
function submitNewComment() {
    const text = commentInput.value.trim();
    
    if (!text) {
        alert('请输入内容');
        commentInput.focus();
        return;
    }
    
    if (text.length > 500) {
        alert('内容太长了，请精简到500字以内');
        return;
    }
    
    // 创建匿名留言
    const newComment = {
        id: Date.now(),
        text: text,
        time: new Date().toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        }) + ' · ' + 
        new Date().toLocaleDateString('zh-CN', { 
            month: 'short', 
            day: 'numeric' 
        })
    };
    
    // 保存
    saveComment(newComment);
    commentInput.value = '';
    loadComments();
    
    // 显示成功提示
    const submitBtn = document.getElementById('submitComment');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ 已发送';
    submitBtn.style.background = '#4CAF50';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);
}

// 加载评论
function loadComments() {
    // 从localStorage加载评论
    const comments = JSON.parse(localStorage.getItem('100day-comments') || '[]');
    
    // 清空评论列表
    commentsList.innerHTML = '';
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="no-comments">还没有留言</div>';
        return;
    }
    
    // 显示留言
    comments.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <div class="comment-text">${comment.text}</div>
            <div class="comment-time">${comment.time}</div>
        `;
        commentsList.appendChild(commentItem);
    });
}

// 保存评论到localStorage
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('100day-comments') || '[]');
    comments.push(comment);
    localStorage.setItem('100day-comments', JSON.stringify(comments));
}

// 处理键盘事件
function handleKeyboard(e) {
    if (dayModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && currentDay > 1) {
            showPreviousDay();
        } else if (e.key === 'ArrowRight' && currentDay < 100) {
            showNextDay();
        } else if (e.key === 'Escape') {
            dayModal.classList.remove('active');
        }
    } else if (commentsModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            commentsModal.classList.remove('active');
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);