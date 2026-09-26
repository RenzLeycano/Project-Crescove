// Video Shuffler in Welcome Page (index.html)

window.addEventListener('DOMContentLoaded', () => {
const video = document.getElementById('crescove-bg-video');
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

// Display Results and Hide Activity
const activity = document.getElementById('mood-activity');
const results = document.getElementById('results');
const actSubmit = document.getElementById('activity-send');

if(actSubmit){
    actSubmit.addEventListener('submit', function(event){
        event.preventDefault();
        activity.classList.add('hide-activity');
        results.classList.add('show-results');
    })
}
// Display Results based on Activity

// 

// activity.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const mood = document.getElementById('mood').value;
//     localStorage.setItem('mood', mood);
//     const intensity = document.querySelector('input[name="intensity"]:checked').value;
//     localStorage.setItem('intensity', intensity);

//     window.location.href = 'Crescove-Activity-Results.html';
// });

// const adviceResult = document.getElementById('advice-details');
// if(adviceResult){
//     const storedMood = localStorage.getItem('mood');
//     const storedIntensity = localStorage.getItem('intensity');

//     adviceResult.textContent = storedMood;
// }