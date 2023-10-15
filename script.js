const bar = document.getElementById('bar');
const nav = document.getElementsByTagName('ul')[0];

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}