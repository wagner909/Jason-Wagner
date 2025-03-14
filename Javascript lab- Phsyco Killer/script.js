const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 33.8, text: "I can't seem to face up to the facts" },
    { time: 38, text: "I'm tense and nervous and I can't relax" },
    { time: 42, text: "I can't sleep 'cause my bed's on fire" },
    { time: 47, text: "Don't touch me, I'm a real live wire" },
    { time: 51, text: "Psycho Killer" },
    { time: 52.9, text: "Qu'est-ce que c'est?" },
    { time: 54.8, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 59.9, text: "Run, run, run, run, run, away, oh, oh, oh, oh" },
    { time: 69.0, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 80, text: "You start a conversation, you can't even finish it" },
    { time: 84.5, text: "You're talking a lot, but you're not saying anything" },
    { time: 89.8, text: "When I have nothing to say, my lips are sealed" },
    { time: 93.1, text: "Say something once, why say it again?" },
    { time: 97.6, text: "Psycho Killer" },
    { time: 99, text: "Qu'est-ce que c'est?" },
    { time: 101.2, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 105.5, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 115, text: "Psycho Killer" },
    { time: 117, text: "Qu'est-ce que c'est?" },
    { time: 118, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 123, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 132, text: "Ay-ya-ya-ya-ya-ya" },
    { time: 135, text: "Ce que j'ai fait, ce soir-là" },
    { time: 143, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 152, text: "Réalisant mon espoir" },
    { time: 156, text: "Je me lance vers la gloire, okay" },
    { time: 164, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 168, text: "We are vain and we are blind" },
    { time: 172, text: "I hate people when they're not polite" },
    { time: 177, text: "Psycho Killer" },
    { time: 179, text: "Qu'est-ce que c'est?" },
    { time: 180, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 186, text: "Run, run, run, run, run, away, oh, oh, oh, oh" },
    { time: 195, text: "Ay-ya-ya-ya-ya-ya, ooh" },

  ];
  
  let currentLyricIndex = 0;
  const audio = document.getElementById("audio");
  const lyricElement = document.getElementById("lyric");
  
  audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100); // Update lyrics every 100ms for better accuracy
  });
  
  function displayLyrics() {
    const currentTime = audio.currentTime;
    
    // Find the current lyric based on time
    if (
      currentLyricIndex < lyrics.length &&
      currentTime >= lyrics[currentLyricIndex].time
    ) {
      lyricElement.textContent = lyrics[currentLyricIndex].text;
      currentLyricIndex++;
    }
  }