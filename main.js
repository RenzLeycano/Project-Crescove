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
            const irritated = [
                "Take a deep breath, step back from what is draining your energy.",
                "Let yourself feel that frustration without holding it inside.",
                "Cheer up, try not to think about it. Focus on your hobbies or something, which is more fun than thinking about things that stress you out.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing."
            ]
            moodColor.style.backgroundColor = "var(--irritated)";
            moodTitle.textContent = "Irritated";
            adviceResult.textContent = irritated[index];
            break;
        case 7:        //Lonely
            const lonely = [
                "Be gentle with your heart, remember that your worth doesn't depend on forcing connection, and know that you are completely enough just as you are.",
                "Be yourself. There’s nothing wrong with being yourself. Maybe you just haven’t found your people yet. Don’t give up.",
                "Try and reach out to your friends. You can't stay longing for a connection. Try and meet new people who could support you.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing."
            ]
            moodColor.style.backgroundColor = "var(--lonely)";
            moodTitle.textContent = "Lonely";
            adviceResult.textContent = lonely[index];
            break;
        case 8:        //Sad
            const sad = [
                "Let yourself finally break down and cry, because holding back all that heavy pain only makes it harder to heal.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing.",
                "Talk to someone you fully trust. Don’t be afraid to open up.",
                "It's difficult to know when to move forward. But at the end of the day, we have to. You don't have to rush, take your time.",
                "Nothing heals us like letting people know our scariest parts: When people listen to you cry and lament, and look at you with love, it's like they are holding the baby of you."
            ]
            moodColor.style.backgroundColor = "var(--sad)";
            moodTitle.textContent = "Sad";
            adviceResult.textContent = sad[index];
            break;
        case 9:        //Guilty
            const guilty = [
                "Be gentle with yourself. Do not be harsh. You’re already doing too much. Calm down and put yourself first.", 
                "Don't dwell too much in the past, focus on the present, where you could learn from your mistakes.",
                "It's difficult to know when to move forward. But at the end of the day, we have to. Learn from your mistakes.",
                "Everyone makes mistakes. It's ok to reflect on them so we can learn. What's not ok is dwelling too much on things you did instead of what you can do in the future.",
                "It is perfectly human to make mistakes, but it is up to you on how you react to it and how you would grow as a better version of you in every mistake."
            ]
            moodColor.style.backgroundColor = "var(--guilty)";
            moodTitle.textContent = "Guilty";
            adviceResult.textContent = guilty[index];
            break;
        case 10:       //Bored
            const bored = [
                "You can try out new hobbies if you feel lazy or learn new things if you want to be challenged.", 
                "Try contacting your friends, a simple chat could lighten up your day!",
                "The first step is always the hardest. You can start slow and steady.",
                "There's only two things on how it ends, you do it or you don't.",
                "Stay attentive! You might be missing out on some things you should be keeping track off."
            ]
            moodColor.style.backgroundColor = "var(--bored)";
            moodTitle.textContent = "Bored";
            adviceResult.textContent = bored[index];
            break;
    }
    // adviceResult.textContent = "Hello, World!";
})

