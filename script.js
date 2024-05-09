const animeImages = document.querySelectorAll('.animeImage');

animeImages.forEach(animeImage => {
    const originalImageSrc = animeImage.src;
    
    animeImage.addEventListener('mouseover', function() {
        animeImage.src = 'images/proximamente.png';
    });
    
    animeImage.addEventListener('mouseout', function() {
        animeImage.src = originalImageSrc;
    });
});
