document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById("videoFrame");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const chapterNumber = document.getElementById("chapterNumber");
    
    let currentVideoIndex = 0;

    updateChapterNumber();

    prevBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
        videoFrame.src = videoUrls[currentVideoIndex];
        updateChapterNumber();
    });
    
    nextBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
        videoFrame.src = videoUrls[currentVideoIndex];
        updateChapterNumber();
    });

    function updateChapterNumber() {
        chapterNumber.textContent = currentVideoIndex + 1;
    }
});
