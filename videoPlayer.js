document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById("videoFrame");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const chapterNumber = document.getElementById("chapterNumber");
    
    const videos = [
        "https://drive.google.com/file/d/1WhPZfxpxYrs-6EqtIjVzcsSOWTY6UArX/preview",
        "https://drive.google.com/file/d/1WmdvEbNwNXheuksVAgTm7r_Nq8qDE9h9/preview",
        "https://drive.google.com/file/d/1WvTN96txsiTOGQHREcYdxruEq_977g3l/preview"
    ];

    let currentVideoIndex = 0;

    updateChapterNumber();

    prevBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        videoFrame.src = videos[currentVideoIndex];
        updateChapterNumber();
    });
    
    nextBtn.addEventListener("click", function() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoFrame.src = videos[currentVideoIndex];
        updateChapterNumber();
    });

    function updateChapterNumber() {
        chapterNumber.textContent = currentVideoIndex + 1;
    }
});