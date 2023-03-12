

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.classList.add('.scroll-nav');
      console.log('Added scroll-nav class');
    } else {
      navbar.classList.remove('.scroll-nav');
      console.log('Removed scroll-nav class');
    }
  }

  