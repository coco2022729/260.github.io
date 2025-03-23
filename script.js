// 为导航链接添加点击事件
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 移除所有链接的active类
        document.querySelectorAll('.nav-item a').forEach(l => {
            l.classList.remove('active');
        });
        // 为当前点击的链接添加active类
        this.classList.add('active');
    });
});