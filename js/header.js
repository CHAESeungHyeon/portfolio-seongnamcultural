// 햄버거 메뉴
const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('headerNav');

if (hamburger && headerNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
  });
}
