document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById("videoFrame");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const chapterNumber = document.getElementById("chapterNumber");
    
    let currentVideoIndex = 0;

    updateChapterNumber();
    loadVideo(currentVideoIndex);

    prevBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
        loadVideo(currentVideoIndex);
        updateChapterNumber();
    });
    
    nextBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
        loadVideo(currentVideoIndex);
        updateChapterNumber();
    });

    function loadVideo(index) {
        videoFrame.src = videoUrls[index];
    }

    function updateChapterNumber() {
        chapterNumber.textContent = currentVideoIndex + 1;
    }
});
