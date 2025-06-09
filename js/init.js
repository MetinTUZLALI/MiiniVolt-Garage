$(document).ready(function() {
  $(".countdown").countdown({
      date: "12 March 2024 18:30:00",
      format: "on"
  }, function() {
      // callback function
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
      document.getElementById('overlay-img').style.opacity = 1;
  }, 2000); // 2000 ms = 2 saniye
});

document.addEventListener('DOMContentLoaded', () => {
  const pages = ['page1', 'page2', 'page3', 'page4', 'page5'];

  function showPage(pageId) {
      pages.forEach(id => {
          document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
      });
  }

  // Videoyu seç (id ile)
  const video = document.getElementById('backgroundVideo');

  // Offcanvas içindeki linklere tıklanınca sayfa göster ve videoyu sıfırla
  document.querySelectorAll('.page-link').forEach(link => {
      link.addEventListener('click', e => {
          e.preventDefault();
          const targetPage = e.currentTarget.getAttribute('data-target');
          showPage(targetPage);

          if(video) {
              video.pause();
              video.currentTime = 0;
              video.play();
          }

          // Offcanvas kapatmak için Bootstrap JS fonksiyonu
          const offcanvasElement = document.getElementById('offcanvasMenu');
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if(bsOffcanvas) bsOffcanvas.hide();
      });
  });

  // Başlangıçta 1. sayfa görünür olsun
  showPage('page1');
});

document.addEventListener('contextmenu', event => event.preventDefault());