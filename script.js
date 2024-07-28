function searchTools() {
    var input, filter, categories, tools, a, i, j, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    categories = document.getElementsByClassName('category');
    
    for (i = 0; i < categories.length; i++) {
        tools = categories[i].getElementsByTagName('li');
        let categoryVisible = false;

        for (j = 0; j < tools.length; j++) {
            a = tools[j].getElementsByTagName('a')[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tools[j].style.display = '';
                categoryVisible = true;
            } else {
                tools[j].style.display = 'none';
            }
        }

        if (categoryVisible) {
            categories[i].style.display = '';
        } else {
            categories[i].style.display = 'none';
        }
    }
}
// script.js
function applyDarkMode() {
    var body = document.body;
    var button = document.getElementById('toggle-dark-mode');

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        // if (button) {
        //     button.textContent = '切换普通模式';
        //     button.style.backgroundColor = '#f44336';
        //     button.style.borderColor = '#f44336';
        // }
    } else {
        body.classList.remove('dark-mode');
        // if (button) {
        //     button.textContent = '切换暗黑模式';
        //     button.style.backgroundColor = '#4caf50';
        //     button.style.borderColor = '#4caf50';
        // }
    }
}

document.getElementById('toggle-dark-mode')?.addEventListener('click', function() {
    var body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
    applyDarkMode();
});

function setModeBasedOnTime() {
    var hour = new Date().getHours();

    if (hour >= 18 || hour < 6) {  // 18:00 - 6:00 是夜间时间
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    applyDarkMode();
}

// 页面加载时调用函数
window.onload = function() {
    if (localStorage.getItem('darkMode') === null) {
        setModeBasedOnTime();
    } else {
        applyDarkMode();
    }
};