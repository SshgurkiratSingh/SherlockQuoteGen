// Random Background Hero on Page Load and Refresh
// http://stackoverflow.com/questions/19369426/random-background-image-on-refresh

function randomHero() {
  var heroPics = [
    "https://i.ibb.co/zGzn3gq/wallpaperflare-com-wallpaper-1.jpg",
    "https://i.ibb.co/KrhNx6B/518305.jpg",
    "https://i.ibb.co/gmSwzdV/853864.jpg",

    "https://i.ibb.co/fvpSgBd/637791.jpg"
  ];

  $("body").css({
    background:
      "url(" +
      heroPics[Math.floor(Math.random() * heroPics.length)] +
      ") no-repeat",
    "background-attachment": "scroll",
    "background-size": "cover"
  });
}

// Show Random Image on Page Load
randomHero();

// Simulate a page refresh
$("#img").on("click", randomHero);
$("body").mousemove(function (e) {
  var moveX = (e.pageX * -1) / 15;
  var moveY = (e.pageY * -1) / 15;
  $(this).css("background-position", moveX + "px " + moveY + "px");
});
const Quotes = [
  {
    Qnumber: 1,
    Quote:
      "I’m not a psychopath, Anderson. I’m a high-functioning sociopath. Do your research.",
    By: "Sherlock Holmes",
    To: "Mrs. Hudson",
    Season: 1,
    Episode: 1
  },
  {
    Qnumber: 2,
    Quote: "I'm Your land lady ,dear,not your housekeeper",
    By: "Mrs Hudsom",
    To: "Sherlock Holmes",
    Season: 1,
    Episode: 1
  },
  {
    Qnumber: 3,
    Quote:
      "“Bravery is by far the kindest word for stupidity, don’t you think?",
    By: "Mycroft Holmes",
    To: "John Watson",
    Season: 1,
    Episode: 1
  },
  {
    Qnumber: 4,
    Quote: 'Come at once if convenient", "If inconvenient, come anyway',
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 1,
    Episode: 1
  },
  {
    Qnumber: 5,
    Quote:
      "Anderson, don’t talk out loud. You lower the IQ of the whole street.",
    By: "Sherlock Holmes",
    To: "Anderson",
    Season: 1,
    Episode: 1
  },
  {
    Qnumber: 6,
    Quote:
      "I’m Sherlock Holmes and I always work alone because no one else can compete with my massive intellect!",
    By: "John Watson",
    To: "Sherlock Holmes",
    Season: 1,
    Episode: 2
  },
  {
    Qnumber: 7,
    Quote:
      "What does it tell you when an assassin cannot shoot straight? It tells you that they’re not really trying.",
    By: "General Shah",
    To: "Sherlock ",
    Season: 1,
    Episode: 2
  },
  {
    Qnumber: 8,
    Quote:
      "If you don’t stop prying, I will burn you. I will burn the heart out of you.",
    By: "Jim Moriarty",
    To: "Sherlock Holmes",
    Season: 1,
    Episode: 3
  },
  {
    Qnumber: 9,
    Quote:
      "Don’t make people into heroes, John. Heroes don’t exist. And if they did, I wouldn’t be one of them.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 1,
    Episode: 3
  },
  {
    Qnumber: 10,
    Quote: "You do see, you just don’t observe.",
    By: "Sherlock Holmes",
    To: "Inspector Lestrade",
    Season: 1,
    Episode: 3
  },
  {
    Qnumber: 11,
    Quote:
      "I always hear “punch me in the face” when you’re speaking, but it’s usually subtext.",
    By: "John Watson",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 12,
    Quote: "This is how I want you to remember me: the woman who beat you.",
    By: "Irene Adler",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 13,
    Quote: "Brainy is the new sexy.",
    By: "Irene Adler",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 14,
    Quote: "This is how I want you to remember me: the woman who beat you.",
    By: "Irene Adler",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 15,
    Quote: "Sentiment is a chemical defect found in the losing side.",
    By: "Sherlock Holmes",
    To: "Irene Adler",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 16,
    Quote:
      "Listen, what I said before, John, I meant it. I don’t have friends. I’ve just got one.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 2,
    Episode: 2
  },
  {
    Qnumber: 17,
    Quote:
      "It’s a memory technique, a sort of mental map. You plot a… a map with a location – it doesn’t have to be a real place – and then you deposit memories there that… theoretically, you can never forget anything. All you have to do is find your way back to it.",
    By: "John Watson",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 2
  },
  {
    Qnumber: 18,
    Quote:
      "our mind, it’s so placid, straight-forward, barely used. Mine’s like an engine, racing out of control, a rocket, tearing itself to pieces, trapped on the launch pad. I NEED A CASE!",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 2,
    Episode: 2
  },
  {
    Qnumber: 19,
    Quote:
      "I was so alone, and I owe you so much, but, please, there’s just one more thing, one more thing, one more miracle, Sherlock, for me. Don’t. Be. Dead.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 20,
    Quote:
      "I may be on the side of the angels but don’t think for one second that I am one of them.",
    By: "Sherlock Holmes",
    To: "Jim Moriarty",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 21,
    Quote:
      "Every fairy tale needs a good old-fashioned villain. You need me or you’re nothing.",
    By: "Jim Moriarty",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 22,
    Quote:
      "This phone call, it’s, um, my note. It’s what people do, don’t they? Leave a note.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 23,
    Quote:
      "I calculated that there were 13 possibilities once I invited Moriarty up onto the roof. I wanted to avoid dying if at all possible.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 3,
    Episode: 1
  },
  {
    Qnumber: 24,
    Quote: "The best and wisest man I’ve ever known…",
    By: "John Watson",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 1
  },
  {
    Qnumber: 25,
    Quote: "I am certainly endeavoring to, sir.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 3,
    Episode: 1
  },
  {
    Qnumber: 26,
    Quote:
      "So if I didn’t understand I was being asked to be best man, it is because I never expected to be anybody’s best friend, and certainly not the best friend of the bravest and kindest and wisest human being I have ever had the good fortune of knowing. John, I am a ridiculous man, redeemed only by the warmth and constancy of your friendship.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 3,
    Episode: 2
  },
  {
    Qnumber: 27,
    Quote:
      "You’re already the best parents in the world. Look at all the practice you’ve had. You’re hardly going to need me around now that you’ve got a real baby on the way",
    By: "Sherlock Holmes",
    To: "John Watson & Mary Morstan",
    Season: 3,
    Episode: 2
  },
  {
    Qnumber: 28,
    Quote:
      "“A wedding is, in my considered opinion, nothing short of a celebration of all that is false and specious and irrational and sentimental in this ailing and morally compromised world. Today we honor the deathwatch beetle that is the doom of our society and—in time, one feels certain—our entire species. But, anyway, let’s talk about John.",
    By: "Sherlock Holmes",
    To: "Crowd in John's Wedding",
    Season: 3,
    Episode: 2
  },
  {
    Qnumber: 29,
    Quote:
      "If I burden myself with a little helpmate during my adventures, this is not out of sentiment or caprice. It is that he has many fine qualities of his own that he has overlooked in his obsession with me. Indeed, any reputation I have for mental acuity and sharpness comes, in truth, from the extraordinary contrast John so selflessly provides.",
    By: "Sherlock Holmes",
    To: "Crowd in John's Wedding",
    Season: 3,
    Episode: 2
  },
  {
    Qnumber: 30,
    Quote: "Your loss would break my heart.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 3
  },
  {
    Qnumber: 31,
    Quote:
      "The problems of your past are your business. The problems of your future are my privilege.",
    By: "John Watson",
    To: "Mary Morstan",
    Season: 3,
    Episode: 3
  },
  {
    Qnumber: 32,
    Quote: "Did you miss me?",
    By: "Moriarty",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 3
  },
  {
    Qnumber: 33,
    Quote: "Is everyone I’ve ever met a psychopath?",
    By: "John Watson",
    To: "Sherlock Holmes & Mary Morstan",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 34,
    Quote:
      "God is ludicrous fiction dreamt up by inadequates who abnegate all responsibility to an invisible magic friend.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 35,
    Quote:
      'If you ever think I\'m becoming full of myself, overconfident or cocky, would you just say the word "Norberry" to me, would you?',
    By: "Sherlock Holmes",
    To: "Mary Morstan",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 36,
    Quote: "Work is the best antidote to sorrow, Mrs Hudson.",
    By: "Sherlock Holmes",
    To: "Mrs. Hudson",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 37,
    Quote:
      "When does the path we walk on lock around our feet? When does the road become a river with only one destination? Death waits for us all in Samarra. But can Samarra be avoided?",
    By: "Sherlock Holmes",
    To: "Myscroft Holmes",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 38,
    Quote:
      "Intuitions are not to be ignored, John. They represent data processed too fast for the conscious mind to comprehend.",
    By: "Sherlock Holmes",
    To: "John Watson",
    Season: 4,
    Episode: 1
  },
  {
    Qnumber: 39,
    Quote:
      "Everybody dies. It’s the one thing human beings can be relied upon to do. How can it still come as a surprise to people?",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 4,
    Episode: 2
  },
  {
    Qnumber: 40,
    Quote:
      "Don’t be absurd. I’m not given to outbursts of brotherly compassion. You know what happened to the other one.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 3
  },
  {
    Qnumber: 41,
    Quote:
      "We are in Buckingham Palace. The very heart of the British nation. Sherlock Holmes, put your trousers on.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 42,
    Quote:
      "My brother has the mind of a scientist or a philosopher and yet he elects to be a detective. What might we deduce about his heart?",
    By: "Mycroft Holmes",
    To: "John Watson",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 43,
    Quote:
      "I was there for you before, I’ll be there for you again. I’ll always be there for you.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 4,
    Episode: 0
  },
  {
    Qnumber: 44,
    Quote:
      "All hearts are broken. All lives end. Caring is not an advantage, Sherlock.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 1
  },
  {
    Qnumber: 45,
    Quote:
      "If you seem slow to me, Sherlock, can you imagine what real people are like? I’m living in a world of goldfish.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 1
  },
  {
    Qnumber: 46,
    Quote:
      "If you have what you say you have, I will make you rich. If you don’t, I’ll make you into shoes.",
    By: "Moriarty",
    To: "The Woman",
    Season: 1,
    Episode: 3
  },
  {
    Qnumber: 47,
    Quote:
      "Genius detective proved to be a fraud.” I read it in the paper so it must be true. I love newspapers. Fairy tales… and pretty grim ones too.",
    By: "Moriarty",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 48,
    Quote:
      "Sorry, boys! I’m sooooo changeable! It is a weakness with me, but to be fair to myself, it is my only weakness.",
    By: "Moriarty",
    To: "Sherlock Holmes & John Watson",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 49,
    Quote:
      "Sorry, boys! I’m sooooo changeable! It is a weakness with me, but to be fair to myself, it is my only weakness.",
    By: "Moriarty",
    To: "Sherlock Holmes",
    Season: 3,
    Episode: 3
  },
  {
    Qnumber: 50,
    Quote:
      "In a world of locked rooms, the man with the key is king. And honey, you should see me in a crown",
    By: "Moriarty",
    To: "Sherlock Homes",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 51,
    Quote:
      "I gave you my number. I thought you might call. Is that a British Army Browning L9A1 in your pocket, or are you just pleased to see me?",
    By: "Moriarty",
    To: "Sherlock Holmes",
    Season: 2,
    Episode: 3
  },
  {
    Qnumber: 52,
    Quote:
      "Well, I supposed there is a heart somewhere inside me. I don't imagine it's much of a target, but why don't we try for that.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes & John Watson",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 53,
    Quote:
      "Well don't worry! There's a place for people like you, desperate, terrified, the ones with nowhere else to run.",
    By: "John Watson",
    To: "Myscroft Holmes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 54,
    Quote:
      "Saved her? From what? Be sensible, there were no explosives in her little house. Why would I be so clumsy? You didn't win, you lost. Look what you did to her. Look what you did to yourself, all those complicated little emotions, I lost count. Emotional context, it destroys you, every time",
    By: "Eurus Holmes",
    To: "Sherlock Homes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 55,
    Quote:
      "When all else fails, there are two men sitting, arguing in a scruffy flat, like they've always been there, and they always will. The best and wisest men I have every known. My Baker Street Boys. Sherlock Holmes and Doctor Watson",
    By: "Mary Morstan",
    To: "Sherlock Holmes & John Watson",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 56,
    Quote:
      " Today we are soldiers. Soldiers die for their country. I regret, Doctor Watson, that privilege is now yours.",
    By: "Mycroft Holmes",
    To: "John Watson",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 57,
    Quote:
      "Memories can resurface. Wounds can reopen. The roads we walk have demons beneath, and yours have been waiting for a very long time.",
    By: "Mycroft Holmes",
    To: "Sherlock Holmes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 58,
    Quote:
      "Good and bad are fairytales. We have evolved to attach an emotional significance to what is  nothing more than a survival strategy of the pack animal. We’re conditioned to invest divinity in utility. Good isn’t really good, evil isn’t really wrong, bottoms aren’t really pretty. You are a prisoner of your own meat.",
    By: "Eurus Holmes",
    To: "Sherlock Holmes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 59,
    Quote:
      "This isn’t torture, this is vivisection. We’re experiencing science from the perspective of lab rats.",
    By: "Sherlock Holmes",
    To: "Myscroft Holmes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 60,
    Quote:
      "ou didn't win, you lost. Look what you did to her. Look what you did to yourself, all those complicated little emotions, I lost count. Emotional context, it destroys you, every time.",
    By: "Eurus Holmes",
    To: "Sherlock Holmes",
    Season: 4,
    Episode: 3
  },
  {
    Qnumber: 61,
    Quote: "Get out of my house, you reptile.",
    By: "Mrs Hudsom",
    To: "Mycroft Holmes",
    Season: 4,
    Episode: 2
  },
  {
    Qnumber: 62,
    Quote:
      "Taking your own life. Interesting expression, taking it from who? Once it's over, it's not you who'll miss it. Your own death is something that happens to everyone else. Your life is not your own, keep your hands off it",
    By: "Sherlock Holmes",
    Season: 4,
    Episode: 2
  }
];
const quotText = document.getElementById("text");
const By = document.getElementById("author");
const Es = document.getElementById("es");
function quotGen() {
  let x = Math.floor(Math.random() * 62 + 0);
  quotText.innerHTML = Quotes[x].Quote;
  By.innerHTML = Quotes[x].By;
  Es.innerHTML =
    "Season:" +
    Quotes[x].Season +
    " Episode:" +
    Quotes[x].Episode +
    " To " +
    Quotes[x].To;
  $(".quote-text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
  });
  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
  });

  $("#es").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
  });
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + Quotes[x].Quote + '" ' + Quotes[x].By)
  );
}
quotGen();
const newButton = document.getElementById("new-quote");
newButton.addEventListener("click", quotGen);
