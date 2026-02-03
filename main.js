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
    responsive: [
      { 
		breakpoint: 750,
		 settings: { 
			slidesToShow: 3 // 画面幅750px以下でスライド3枚表示
		 }
	  }
    ]
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




