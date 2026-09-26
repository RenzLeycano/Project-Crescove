// Video Shuffler in Welcome Page (index.html)

window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('crescove-bg-video');

    if (!video) {
        console.log("Video element not found.");
        return; 
    }

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
const adviceResult = document.getElementById('advice-details');



if(actSubmit){
    actSubmit.addEventListener('submit', function(event){
        event.preventDefault();

        let mood = document.getElementById('mood').value;
        let intensity = document.querySelector('input[name="intensity"]:checked');

        console.log(mood);
        console.log(intensity);


        activity.classList.add('hide-activity');
        results.classList.add('show-results');

// Display Results based on Activity
        switch(mood) {
            case(1):        //Angry
            case(2):        //Anxious
            case(3):        //Happy
            case(4):        //Confident
            case(5):        //Calm
            case(6):        //Irritated
            case(7):        //Lonely
            case(8):        //Sad
            case(9):        //Guilty
            case(10):       //Bored
        }
        adviceResult.textContent = "Hello, World!";
    })
}
