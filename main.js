$(function () {
  /* =========================
    Slick
  ========================== */
  // もし要素が無ければ何もしない（エラー防止）
  if ($('.visual, .slick1').length) {
    $('.visual, .slick1').slick({
      autoplay: true,
      dots: true,
      arrows: true
    });
  }

  if ($('.cat-slider').length) {
    $('.cat-slider').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5500,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      waitForAnimate: false,
      rtl: false,
      responsive: [
        { breakpoint: 1470, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 2.5 } },
        { breakpoint: 381,  settings: { slidesToShow: 2 } }
      ]
    });

    // レイアウト崩れ対策
    $(window).on('load resize', function () {
      $('.cat-slider').slick('setPosition');
    });
  }

  /* =========================
    SP Hamburger Menu
  ========================== */
  const $body = $('body');
  const $hamburger = $('.js-hamburger');
  const $spMenu = $('.js-sp-menu');
  const $overlay = $('.js-sp-overlay');
  const $spLinks = $('.js-sp-link');

  function openMenu() {
    $body.addClass('menu-open');
    $hamburger.attr('aria-expanded', 'true');
    $spMenu.attr('aria-hidden', 'false');
  }

  function closeMenu() {
    $body.removeClass('menu-open');
    $hamburger.attr('aria-expanded', 'false');
    $spMenu.attr('aria-hidden', 'true');
  }

  // 存在する時だけ動かす
  if ($hamburger.length) {
    $hamburger.on('click', function () {
      $body.hasClass('menu-open') ? closeMenu() : openMenu();
    });

    $overlay.on('click', closeMenu);
    $spLinks.on('click', closeMenu);
  }

  /* =========================
    Work Modal
  ========================== */
  const $modal = $('#work-modal');
  const $modalBody = $modal.find('.modal-body');
  const $closeBtn = $modal.find('.close');

  // モーダル開閉：CSSで .is-open を使う前提
  // CSS側に下記を追加推奨：
  // .modal { display:none; }
  // .modal.is-open { display:flex; }
  function openModal(html) {
    // SPメニューが開いてたら閉じる（スマホ事故防止）
    closeMenu();

    $modalBody.html(html);
    $modal.addClass('is-open');
    $body.addClass('modal-open'); // 背景スクロール固定用（任意）
    $modalBody.scrollTop(0);
  }

  function closeModal() {
    $modal.removeClass('is-open');
    $body.removeClass('modal-open');
    $modalBody.empty();
    $modalBody.scrollTop(0);
  }

  // WORKボタン：イベント委譲（後から増やしてもOK）
  $(document).on('click', '.open-modal', function (e) {
    e.preventDefault();
    const html = $(this).attr('data-content') || '';
    openModal(html);
  });

  // ×で閉じる
  $closeBtn.on('click', closeModal);

  // 背景クリックで閉じる
  $modal.on('click', function (e) {
    if (e.target === this) closeModal();
  });

  // ESCで閉じる（メニューも閉じる）
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      if ($modal.hasClass('is-open')) closeModal();
      if ($body.hasClass('menu-open')) closeMenu();
    }
  });
});

$(window).on('load', function () {

  // sessionStorage にフラグがあるか確認
  if (!sessionStorage.getItem('visited')) {

    $('body').addClass('is-loading');

    setTimeout(function () {
      $('#loading').fadeOut(600, function () {
        $(this).remove();
        $('body').removeClass('is-loading');
      });
    }, 2000); // 表示時間（2秒）

    // 訪問済みにする
    sessionStorage.setItem('visited', 'true');

  } else {
    // 2回目以降は即削除
    $('#loading').remove();
  }

});
