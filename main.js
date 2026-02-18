/**
 * 
 */

$(document).ready(function(){

  // slick 初期化
  $('.visual, .slick1').slick({
    autoplay: true,
    dots: true,
    arrows: true
  });

  $('.cat-slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    waitForAnimate: false,
    rtl: false,  
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5
        }
      },
      // {
      //   breakpoint: 901,
      //   settings: {
      //     slidesToShow: 2.5
      //   }
      // },
      // {
      //   breakpoint: 769,
      //   settings: {
      //     slidesToShow: 3
      //   }
      // },
      // {
      //   breakpoint: 481,
      //   settings: {
      //     slidesToShow: 2.5
      //   }
      // },
      {
        breakpoint: 381,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $(window).on('load resize', function(){
    $('.cat-slider').slick('setPosition');
  });

  const modal = document.getElementById('work-modal');
  const modalBody = modal.querySelector('.modal-body');
  const closeBtn = modal.querySelector('.close');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      modalBody.innerHTML = this.dataset.content; // HTMLごと差し込み
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

});


/* ハンバーガーメニュー */
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector('.js-hamburger');
  const menu = document.querySelector('.js-sp-menu');
  const overlay = document.querySelector('.js-sp-overlay');
  const links = document.querySelectorAll('.js-sp-link');

  if (!btn) return; // 念のため存在チェック

  function openMenu(){
    document.body.classList.add('menu-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu(){
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', function(){
    document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  links.forEach(function(link){
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
  });

});





