const drum=document.createElement("div");
drum.id="drum-machine";
document.body.appendChild(drum);

const display=document.createElement("div");
display.id="display";
display.textContent="BEAT IT";
drum.appendChild(display);

const pads = [
  { key: "Q", name: "Heater 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", name: "Heater 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", name: "Heater 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", name: "Heater 4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", name: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", name: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick-n'-Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

pads.forEach( pad=>{
  const padButton=document.createElement("button");
  padButton.className="drum-pad";
  padButton.id=pad.name;
  padButton.textContent=pad.key;
  
  const audio=document.createElement("audio");
  audio.className="clip";
  audio.id=pad.key;
  audio.src=pad.src;
  
  
  drum.appendChild(padButton);
  padButton.appendChild(audio);
  
  padButton.addEventListener("click",()=>{
    audio.currentTime=0;
    audio.play();
    display.textContent=pad.name;
  })
})

document.addEventListener("keydown",e=>{
  const key=e.key.toUpperCase();
  const pad=pads.find(p=> p.key===key);
  if(pad){
    const audio=document.getElementById(pad.key);
    audio.currentTime=0;
    audio.play();
    display.textContent=pad.name;
  }
})
