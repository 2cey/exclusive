const video = document.getElementById("video");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        video.muted = false; // Enable audio
        video.requestFullscreen().catch(error => {
            console.error("Fullscreen request rejected:", error);
        });
        document.documentElement.style.overflow = "hidden"; // Hide scroll bar
        playButton.style.display = "none"; // Hide the button
    } else {
        video.pause();
    }
});
