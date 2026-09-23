window.addEventListener('DOMContentLoaded', () => {
const video = document.getElementById('crescove-bg-video');

// Define all your video file paths
const videoSources = [
    "Video/Crescove-BG-Video1.mp4",
    "Video/Crescove-BG-Video2.mp4",
    "Video/Crescove-BG-Video3.mp4",
    "Video/Crescove-BG-Video4.mp4"
];

const index = Math.floor(Math.random() * videoSources.length);

video.src = videoSources[index];

video.load();
});