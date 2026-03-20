/* ============================================================
   header.js - 햄버거 메뉴 (모든 페이지 공통)
   ============================================================ */
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('headerNav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    hamburger.setAttribute('aria-label', nav.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기');
  });

  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-label', '메뉴 열기');
    }
  });
})();
