document.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG' && e.target.closest('figure')) {
    const overlay = document.getElementById('galleryOverlay');
    const fullImg = document.getElementById('enlarged');
    
    fullImg.src = e.target.src;
    overlay.style.display = 'flex';
  }
});