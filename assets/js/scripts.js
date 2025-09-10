  
  // Change image on active
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('shown.bs.tab', () => {
      document.querySelectorAll('.nav-link img').forEach(img => {
        img.src = img.dataset.default;
      });
      const activeImg = link.querySelector('img');
      activeImg.src = activeImg.dataset.active;
    });
  }); 