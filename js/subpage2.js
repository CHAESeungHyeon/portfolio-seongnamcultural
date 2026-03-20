// subpage2.js - 공연 상세 페이지

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
   찜하기 버튼 토글
   ============================================================ */
(function () {
  const wishBtn = document.getElementById('wishBtn');
  if (!wishBtn) return;

  wishBtn.addEventListener('click', () => {
    const isLiked = wishBtn.classList.toggle('liked');
    const icon = wishBtn.querySelector('i');
    icon.className = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  });
})();


/* ============================================================
   하단 고정 바 - 히어로 지나면 표시, 푸터 보이면 숨김
   ============================================================ */
(function () {
  const stickyBar = document.getElementById('stickyBar');
  const hero      = document.querySelector('.detail-hero');
  const footer    = document.querySelector('footer');

  if (!stickyBar || !hero) return;

  stickyBar.style.transform  = 'translateY(100%)';
  stickyBar.style.transition = 'transform 0.3s ease';

  function update() {
    const heroTop      = hero.getBoundingClientRect().top;
    const footerTop    = footer ? footer.getBoundingClientRect().top : Infinity;
    const vpH          = window.innerHeight;
    const heroCovered  = heroTop < 0;          /* 배너 상단이 뷰포트 위로 올라가면 */
    const footerVisible = footerTop < vpH;

    if (heroCovered && !footerVisible) {
      stickyBar.style.transform = 'translateY(0)';
    } else {
      stickyBar.style.transform = 'translateY(100%)';
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
