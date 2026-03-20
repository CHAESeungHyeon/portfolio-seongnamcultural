// subpage1.js - 공연/전시 페이지

/* ============================================================
   햄버거 메뉴
   ============================================================ */
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('headerNav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    hamburger.setAttribute('aria-label', nav.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기');
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });
})();


/* ============================================================
   사이드 네비게이션 스크롤 위치 조정 (index와 동일한 방식)
   ============================================================ */
(function () {
  const sideNav = document.getElementById('sideNav');
  const anchor  = document.getElementById('perf-nav-section');

  if (!sideNav || !anchor) return;

  function update() {
    const anchorRect = anchor.getBoundingClientRect();
    const navH  = sideNav.offsetHeight;
    const vpH   = window.innerHeight;

    /* 기본 위치: 뷰포트 수직 중앙 */
    const naturalTop = Math.round((vpH - navH) / 2);

    /* 최소 top: 기준 섹션 하단 + 여백 (헤더 아래로 내려오도록) */
    const minTop = Math.round(anchorRect.bottom + 10);

    sideNav.style.top = Math.max(naturalTop, minTop) + 'px';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
})();
