const compliments = [
    "You have such a beautiful smile.",
    "Your laugh is so contagious.",
    "You’re always so kind to everyone around you.",
    "I love how confident you are.",
    "You’re super fun to be around.",
    "Your sense of humor is amazing.",
    "You always know how to make me smile.",
    "You’re really easy to talk to.",
    "You have such a creative mind.",
    "You’re super talented at [insert hobby/interest].",
    "I admire how passionate you are about things you love.",
    "You have an awesome style.",
    "Your eyes are really pretty.",
    "You’re so smart and thoughtful.",
    "You have such a positive energy.",
    "I like how kind you are to animals/people.",
    "You’re so brave and courageous.",
    "You make the world a better place just by being in it.",
    "You always brighten up the room when you walk in.",
    "You have such a warm heart.",
    "You’re an amazing friend.",
    "I love how you’re always true to yourself.",
    "You have the best taste in music/movies.",
    "You always know how to make things more fun.",
    "You have a beautiful voice.",
    "You always know the right thing to say.",
    "You’re so good at helping people feel better.",
    "Your smile can light up an entire room.",
    "You have the best ideas.",
    "Your sense of style is so unique.",
    "You make everything look so easy.",
    "You’ve got such a great personality.",
    "You are seriously so cool.",
    "Your energy is so uplifting.",
    "You’re one of the most creative people I know.",
    "You are so fun to talk to.",
    "You have a heart of gold.",
    "You always seem to know exactly what to do.",
    "You have a great sense of adventure.",
    "Your confidence is inspiring.",
    "You’re such a good listener.",
    "You have an incredible sense of humor.",
    "You’re so thoughtful and caring.",
    "You have a really unique way of thinking.",
    "You’re so interesting to be around.",
    "Your kindness is so inspiring.",
    "I admire how you always stay calm under pressure.",
    "You’re so brave for following your dreams.",
    "You always know how to make people feel welcome.",
    "You’re such a good friend to everyone.",
    "I love how you always stay true to your beliefs.",
    "You’re a really good problem solver.",
    "You have a great sense of timing and know how to make everything fun.",
    "You make everything seem more exciting.",
    "You have a very calming presence.",
    "You have an amazing work ethic.",
    "Your sense of humor is one of my favorite things about you.",
    "You are incredibly thoughtful.",
    "You always make people feel special.",
    "Your personality is so magnetic.",
    "You always brighten up my day.",
    "You are so good at making people laugh.",
    "I love the way you think.",
    "You’re really good at making everyone feel included.",
    "Your energy is so positive.",
    "You always know how to cheer people up.",
    "I love how adventurous you are.",
    "You have such a graceful way about you.",
    "I admire your intelligence.",
    "You have such a good heart.",
    "You are so talented in everything you do.",
    "I love how supportive you are of everyone.",
    "You’re really good at being there for your friends.",
    "You have a very calming way about you.",
    "I love how you’re always so considerate of others.",
    "Your laugh is seriously the best.",
    "You’re so good at seeing the best in people.",
    "You have a really unique perspective on things.",
    "I love the way you always brighten up the room.",
    "You make everyone feel so special.",
    "Your positivity is so contagious.",
    "You’re the kind of person everyone wants to be around.",
    "You have a heart that shines so bright.",
    "You’re really good at making people feel at ease.",
    "I love the way you carry yourself.",
    "You have the best ideas, no matter the situation.",
    "You make everyone around you feel so happy.",
    "Your energy just lights up the place.",
    "You have the most amazing laugh.",
    "You’re always so thoughtful and caring.",
    "I admire how dedicated you are to your goals.",
    "You have an amazing sense of humor.",
    "You always make me feel better when I’m down.",
    "You’re really easy to talk to.",
    "Your kindness is like a breath of fresh air.",
    "I love how passionate you are about your interests.",
    "You’re so strong and resilient.",
    "You’re such a great person to have around.",
    "You always seem to make everything more fun.",
    "You are honestly one of the most amazing people I know."
  ];
  

var comp = document.getElementById("compliment");

function cgen(){
    var x = Math.floor(Math.random() * compliments.length);
    comp.innerHTML=compliments[x]
}




// Target date for the countdown (change this to your desired date)
const targetDate = new Date('2025-04-20T23:59:59');

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `
            <div class="countdown" style="display: inline-block; margin-right: 10px;"><b>${days}</b> days</div>
            <div class="countdown" style="display: inline-block; margin-right: 10px;"><b>${hours}</b> hours</div>
            <div class="countdown" style="display: inline-block; margin-right: 10px;"><b>${minutes}</b> minutes</div>
            <div class="countdown" style="display: inline-block;"><b>${seconds}</b> seconds</div>
        `;
    } else {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'Countdown expired!';
    }
}

// Initial call to update countdown immediately
updateCountdown();

// Update countdown every second
const timer = setInterval(updateCountdown, 1000);

const scriptURL =
'https://script.google.com/macros/s/AKfycby-X3wVn5F0Zt2zHhOtXN3Jcht2Ru86kC8RKp6nkfRmWeTZ1-uSGF13bp9OQEdj9e1uHw/exec'
const form = document.forms['google-sheet']

var rq = document.getElementById('rq')

form.addEventListener('submit', e=> {
	e.preventDefault()
	fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => rq.innerHTML="Thank You For Answering My Questions🥰" )
		.catch(error => console.error('Error!',error.message))
})

 var yes = document.getElementById("yes");
 var no = document.getElementById("no");
 var sup = document.getElementById("surpriseBox");


 
function noo (){
   sup.innerHTML="<h1>No worries at all! I’m glad I got to tell you. 😊</h1>"
}
 
function yess (){
    sup.innerHTML="<h1>Yesss! I knew you had good taste. 😎</h1>"
}

