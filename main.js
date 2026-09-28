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
const activity = document.getElementById('activity');
const results = document.getElementById('result-display');

const moodColor = document.getElementById('mood-color');
const adviceResult = document.getElementById('advice-details');
const moodTitle = document.getElementById('mood-info');



activity.addEventListener('submit', function(event){
    event.preventDefault();

    let mood = document.getElementById('mood').value;
    let intensity = document.querySelector('input[name="intensity"]:checked').value;

    console.log(mood);
    console.log(intensity);


    activity.classList.add('hide-activity');
    results.classList.add('show-results');

// Display Results based on Activity
    const baseVal = 0;
    const random = Math.floor(Math.random() * 5);
    const resultVal = baseVal + (random * intensity);

    let index;
    if(resultVal >= 0 && resultVal < 10) {
        index = 0;
    } else if(resultVal >= 10 && resultVal < 20) {
        index = 1;
    } else if(resultVal >= 20 && resultVal < 30) {
        index = 2;
    } else if(resultVal >= 30 && resultVal <= 40) {
        index = 3;
    }

    console.log(resultVal)
    console.log(index)

    switch (Number(mood)) {
        case 1:        //Angry
            const angry = [
                "Just keep going! Don't dwell too much into what is bothering you.",
                "Don't feel too bad! Next time, things will be better.",
                "Calm down, be positive! Do not attempt to do any negative things or think negative thoughts.",
                "Take care of yourself and make yourself happy by doing the things you love."
            ]
            moodColor.style.backgroundColor = "var(--angry)";
            moodTitle.textContent = "Angry";
            adviceResult.textContent = angry[index];
            break;

        case 2:        //Anxious
            const anxious = [
                "Don't think too much about it! The more you think of that, the more you'll ruin your mood and you'll struggle focusing.",
                "Inhale, Exhale! Clear your mind and thread carefully. You got this!",
                "Try to calm down. It won't be as challenging if you think its not. Fight your fears!",
                "Think happy thoughts and calmly sort out responsibilities. Know your priority."
            ]
            moodColor.style.backgroundColor = "var(--anxiety)"
            moodTitle.textContent = "Anxiety";
            adviceResult.textContent = anxious[index];
            break;

        case 3:        //Happy
            const happy = [
                "Don't think too much about it! The more you think of that, the more you'll ruin your mood and you'll struggle focusing.",
                "Inhale, Exhale! Clear your mind and thread carefully. You got this!",
                "Try to calm down. It won't be as challenging if you think its not. Fight your fears!",
                "Think happy thoughts and calmly sort out responsibilities. Know your priority."
            ]
            moodColor.style.backgroundColor = "var(--happy)";
            moodTitle.textContent = "Happy";
            adviceResult.textContent = happy[index];
            break;
        case 4:        //Confident
            const confident = [
                "Stay humble, keep inspiring others, and use that strong momentum to help those around you grow.",
                "How to be you po? Just kidding, enjoy the moment!",
                "You're the light in the sea of darkness. Continue to thrive and inspire others.",
                "Stay Humble! Cherish the support you get."
            ]
            moodColor.style.backgroundColor = "var(--confident)";
            moodTitle.textContent = "Confident";
            adviceResult.textContent = confident[index];
            break;
        case 5:        //Calm
            const calm = [
                "Stay right there in that peaceful state.",
                "Keep protecting your quiet energy from the noise around you.",
                "Keep calm and eat.",
                "."
            ]
            moodColor.style.backgroundColor = "var(--calm)";
            moodTitle.textContent = "Calm";
            adviceResult.textContent = calm[index];
            break;
        case 6:        //Irritated
            break;
        case 7:        //Lonely
            break;
        case 8:        //Sad
            break;
        case 9:        //Guilty
            break;
        case 10:       //Bored
            break;
    }
    // adviceResult.textContent = "Hello, World!";
})

