const animeImages = document.querySelectorAll('.animeImage');

animeImages.forEach(animeImage => {
    const originalImageSrc = animeImage.src;
    
    animeImage.addEventListener('mouseover', function() {
        animeImage.src = 'images/proximamente.png'; // Cambiar a la nueva imagen
    });
    
    animeImage.addEventListener('mouseout', function() {
        animeImage.src = originalImageSrc; // Restaurar la imagen original
    });
});
