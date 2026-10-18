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

// Light and Dark Mode

const themeToggle = document.getElementById("page-theme");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

const sunImage = "Icons/Light Mode.svg";
const moonImage = "Icons/Dark Mode.svg";

let currentTheme = localStorage.getItem("theme") || "light";

// Apply theme and icon
function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (theme === "dark") {
        themeIcon.src = moonImage;
        themeIcon.alt = "Switch to light mode";
        themeIcon.classList.add("spin-animation");
    } else {
        themeIcon.src = sunImage;
        themeIcon.alt = "Switch to dark mode";
        themeIcon.classList.remove("spin-animation");
    }

    localStorage.setItem("theme", theme);
}

// Set initial theme
applyTheme(currentTheme);

// Toggle on image click
themeToggle.addEventListener("click", () => {
    currentTheme =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(currentTheme);

    themeIcon.classList.remove("spin-animation");

    void themeIcon.offsetWidth;

    themeIcon.classList.add("spin-animation");
});

themeIcon.addEventListener("animationend", () => {
    themeIcon.classList.remove("spin");
});


// Hero Image Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("hero-image-slideshow");

  if(slides.length > 0) {
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex";
  }
  setTimeout(showSlides, 10000); // Change image every 5 seconds
}


// Display Nav Menu (mobile only)
const navMenu = document.getElementById('nav-bar');
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');

if(hamburgerIcon) {
    hamburgerIcon.addEventListener('click', ()=> {
        navMenu.classList.add('display-nav');
        hamburgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
    });
}

if(closeIcon || navMenu) {
    closeIcon.addEventListener('click', hideMenu);
    navMenu.addEventListener('click', hideMenu);
}

function hideMenu() {
        navMenu.classList.remove('display-nav');
        hamburgerIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
}

// Display Results and Hide Activity
const activity = document.getElementById('activity');
const results = document.getElementById('result-display');
const letter = document.getElementById('advice');

const moodColor = document.getElementById('mood-color');
const adviceResult = document.getElementById('advice-details');
const moodTitle = document.getElementById('mood-info');

    // Quick Advice
const quickAdviceHeader = document.getElementById('quick-advice-header');
const moodDetail = document.getElementById('mood-detail');

function displayResult(event) {
    event.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const isQuickAdvice = params.get('quickAdvice') === 'true';

    let mood;
    let intensity;

    if (isQuickAdvice) {
        mood = Math.floor(Math.random() * 10 + 1);
        intensity = Math.floor(Math.random() * 10 + 1);
        quickAdviceHeader.classList.add('show-quick-advice-header');
        moodColor.classList.add('hide-mood-detail');
        moodDetail.classList.add('hide-mood-detail');
    } else {
        mood = document.getElementById('mood').value;
        intensity = document.querySelector('input[name="intensity"]:checked').value;
        results.classList.add('show-results-drop');
    }

    activity.classList.add('hide-activity');
    results.classList.add('show-results');
    letter.classList.add('unveil');

// Display Results based on Activity
    const baseVal = 0;
    const random = Math.floor(Math.random() * 5);
    const resultVal = baseVal + (random * intensity);

    let index;
    if(resultVal >= 0 && resultVal < 10) {
        index = 0;
    } else if(resultVal >= 10 && resultVal < 15) {
        index = 1;
    } else if(resultVal >= 15 && resultVal < 20) {
        index = 2;
    } else if(resultVal >= 20 && resultVal < 25) {
        index = 3;
    } else if(resultVal >= 25 && resultVal < 30) {
        index = 4;
    } else if(resultVal >= 30 && resultVal < 35) {
        index = 5;
    } else if(resultVal >= 35 && resultVal <= 40) {
        index = 6;
    }

    switch (Number(mood)) {
        case 1:        //Angry
            const angry = [
                "Take care of yourself and make yourself happy by doing the things you love.",
                "Just keep going! Don't dwell too much into what is bothering you.",
                "Don't let your anger and frustration consume you. Instead, turn it into passion to improve.",
                "Don't feel too bad! Next time, things will be better.",
                "Calm down, be positive! Do not attempt to do any negative things or think negative thoughts.",
                "Find some ways to vent your problems! Talk to a friend or just find a place to release that anger, as long as it won't hurt anyone!",
                "Take it easy, you did what you could. Instead of feeling sorry for or angry at yourself, focus, be better for the next chance that comes."
            ]
            moodColor.style.backgroundColor = "var(--angry)";
            moodTitle.textContent = "Angry";
            adviceResult.textContent = angry[index];
            break;

        case 2:        //Anxious
            const anxious = [
                "Stay calm and sort through it carefully. You can always ask for help if you need to.",
                "Don't think too much about it! The more you think of that, the more you'll ruin your mood and you'll struggle focusing.",
                "Think happy thoughts and calmly sort out responsibilities. Know your priority.",
                "Try to calm down. It won't be as challenging if you think its not. Fight your fears!",
                "Inhale. Exhale. Clear your mind and thread carefully. You got this!",
                "You know for youself that this isn't the first time, but knowing you're here, it shouldn't be the first time you give up.",
                "You should know that, after how many times you do something nervous, after how many times you succeed despite that, you should start recognizing the pattern that you'll do fine."
            ]
            moodColor.style.backgroundColor = "var(--anxiety)"
            moodTitle.textContent = "Anxiety";
            adviceResult.textContent = anxious[index];
            break;

        case 3:        //Happy
            const happy = [
                "Make sure to take a break once in a while!",
                "Good job! Keep it up. A smile a day keeps depression at bay.",
                "Enjoy your happiness uwu.",
                "Let that happiness sit, enjoy the moment.",
                "Stay genuine! Don't let happiness shine too bright that it hides your own darkness. Not something that you use to hide how you feel in truth.",
                "Happy for you! Maybe try to share that positivity with your friends?",
                "You radiate everyone around you, make sure to keep some of that positivity for yourself as well"
            ]
            moodColor.style.backgroundColor = "var(--happy)";
            moodTitle.textContent = "Happy";
            adviceResult.textContent = happy[index];
            break;
        case 4:        //Confident
            const confident = [
                "Keep yourself grounded in the present!",
                "Always enjoy the moment!",
                "You're the light in the sea of darkness. Continue to thrive and inspire others.",
                "Stay Humble! Cherish the support you get.",
                "Stay humble, keep inspiring others, and use that strong momentum to help those around you grow.",
                "Make sure that your confidence isn't arrogance. Know your own skill and make sure you remain humble.",
                "Do not let your confidence become the way you are taken advantage of. Be aware that there's always a bigger fish in the sea, be open to the idea of losing or being outpaced."
            ]
            moodColor.style.backgroundColor = "var(--confident)";
            moodTitle.textContent = "Confident";
            adviceResult.textContent = confident[index];
            break;
        case 5:        //Calm
            const calm = [
                "Calmness nurtures wisdom.",
                "Stay right there in that peaceful state.",
                "Keep protecting your quiet energy from the noise around you.",
                "Keep calm and eat.",
                "Cherish your peaceful energy. Don't let the world bother you.",
                "You should be relaxed, not letting the outside world affect you can be good. But you shouldn't just completely ignore everything that happens around you",
                "If you're relaxing because you've earned it, then enjoy it, but don't get too lazy because there's always more to strive for."
            ]
            moodColor.style.backgroundColor = "var(--calm)";
            moodTitle.textContent = "Calm";
            adviceResult.textContent = calm[index];
            break;
        case 6:        //Irritated
            const irritated = [
                "Take a deep breath, step back from what is draining your energy.",
                "Let yourself feel that frustration without holding it inside.",
                "It's okay to feel irritated, besides, life won't always go the way you expected it to.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing.",
                "Cheer up, try not to think about it. Focus on your hobbies or something, which is more fun than thinking about things that stress you out.",
                "Temper your expectations, or have none at all, it may be nihilistic or negative but expect the worst so you can always be surprised by the best.",
                "When it comes to stress, let it rip from time to time, bottling things up is how you explode, release your emotions in private when things get rough then face the world with a calmer heart."
            ]
            moodColor.style.backgroundColor = "var(--irritated)";
            moodTitle.textContent = "Irritated";
            adviceResult.textContent = irritated[index];
            break;
        case 7:        //Lonely
            const lonely = [
                "Try doing what you love the most and explore what you love! Maybe you could meet people with similar interests.",
                "Being lonely isn't a bad thing when you know how to spend your time on your own. Become comfortable with silence, don't force your way into things and just enjoy your own company.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing.",
                "Be yourself. There’s nothing wrong with being yourself. Maybe you just haven’t found your people yet. Don’t give up.",
                "Try and reach out to your friends. You can't stay longing for a connection. Try and meet new people who could support you.",
                "Friends come naturally, love does too, if you make yourself approachable and available, it'll come eventually, till that time, there should be no one in the world who knows you like you know yourself, enjoy yourself.",
                "Be gentle with your heart, remember that your worth doesn't depend on forcing connection, and know that you are completely enough just as you are."
            ]
            moodColor.style.backgroundColor = "var(--lonely)";
            moodTitle.textContent = "Lonely";
            adviceResult.textContent = lonely[index];
            break;
        case 8:        //Sad
            const sad = [
                "Talk to someone you fully trust. Don’t be afraid to open up.",
                "You don't have to rush to move on or hide your feelings because you're scared. It'll change how people behave towards you, as a person we are innately designed to let it out.",
                "Let it out. Don’t bottle your feelings. Do not be afraid of sharing.",
                "Let yourself finally break down and cry, because holding back all that heavy pain only makes it harder to heal.", 
                "Scream, yell, cry. Find an outlet, don't let it simmer till you're entirely blue. Don't let someone say it's not that deep because if it hurts you, it hurts you, that's just how it is.",
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
                "If you feel guilty about something that the world sprung onto you like life, it's not your fault.",
                "Don't dwell too much in the past, focus on the present, where you could learn from your mistakes.",
                "It's difficult to know when to move forward. But at the end of the day, we have to. Learn from your mistakes.",
                "Everyone makes mistakes. It's ok to reflect on them so we can learn. What's not ok is dwelling too much on things you did instead of what you can do in the future.",
                "It is perfectly human to make mistakes, but it is up to you on how you react to it and how you would grow as a better version of you in every mistake.",
                "If you feel guilty with something you did in an immature or emotional state, it wasn't your fault. If you need to ask for help, ask, make sure to talk to someone who understands you the most."
            ]
            moodColor.style.backgroundColor = "var(--guilty)";
            moodTitle.textContent = "Guilty";
            adviceResult.textContent = guilty[index];
            break;
        case 10:       //Bored
            const bored = [
                "Inspiration comes when it comes, being lazy or bored comes from comfort, and that isn't innately a bad thing.",
                "Coast through life at your own pace, because it isn't a race, it's a marathon, and you have to pace yourself to make it to the end on your own two feet.",
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
};

if(activity) {
    activity.addEventListener('submit', displayResult);
}


const quickAdvice = document.getElementById('quick-advice')

if(quickAdvice) {
    quickAdvice.addEventListener('click', function () { 
        window.location.href = 'activity.html?quickAdvice=true';
    });
}

const params = new URLSearchParams(window.location.search);

if (params.get('quickAdvice') === 'true') {
    displayResult(new Event('quickAdvice'));
}

