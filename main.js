const toggle = document.querySelector('a.toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', (e) => {
    if(e.target.className === 'ham'){
        toggle.innerHTML = `<img class="close" src="images/icon-close.svg" alt="toggle menu"></img>`;
        nav.style.display = 'flex';
    } else {
        toggle.innerHTML = `<img class="ham" src="images/icon-hamburger.svg" alt="toggle menu">`;
        nav.style.display = 'none';
    }
})