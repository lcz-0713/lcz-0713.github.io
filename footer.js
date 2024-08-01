// footer.js
document.addEventListener("DOMContentLoaded", function() {
    var footerHTML = `
    <footer>
        <div class="footer-content">
            <p>lichenzhen © 2024. All Rights Reserved. 版权所有。未经许可，不得转载或以任何形式复制本站内容。</p>
            <p>设计与开发：<a href="https://github.com/lcz-0713" target="_blank">lichenzhen</a></p>
            <div class="social-icons">
                <a href="https://www.facebook.com/yourprofile" target="_blank" class="fa fa-facebook"></a>
                <a href="https://twitter.com/yourprofile" target="_blank" class="fa fa-twitter"></a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" class="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" class="fa fa-linkedin"></a>
                <a href="https://github.com/lcz-0713" target="_blank" class="fa fa-github"></a>
                <a href="https://weixin.qq.com" target="_blank" class="fa fa-weixin" title="微信"></a>
                <a href="https://weibo.com" target="_blank" class="fa fa-weibo" title="微博"></a>
                <a href="https://im.qq.com" target="_blank" class="fa fa-qq" title="QQ"></a>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
