// 首先：清空本地存储中的评论数据
localStorage.removeItem('100day-comments');

// 然后：初始化空数组
window.comments = [];

// 保存评论函数
function saveComment(comment) {
    window.comments.push(comment);
    localStorage.setItem('100day-comments', JSON.stringify(window.comments));
}

// 加载评论函数
function loadComments() {
    // 总是返回空数组，确保没有旧数据
    return JSON.parse(localStorage.getItem('100day-comments') || '[]');
}

// 初始化：确保从空数组开始
window.comments = loadComments();
// 留言数据管理
localStorage.removeItem('100day-comments');  // 清空所有缓存

// 初始化空数组
window.comments = [];

// 保存留言
function saveComment(comment) {
    const currentComments = JSON.parse(localStorage.getItem('100day-comments') || '[]');
    currentComments.push(comment);
    localStorage.setItem('100day-comments', JSON.stringify(currentComments));
    window.comments = currentComments;
}

// 加载留言
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('100day-comments') || '[]');
    window.comments = comments;
    return comments;
}

// 初始化
loadComments();