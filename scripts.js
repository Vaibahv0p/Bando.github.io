function playSound(soundFile) {
  const audio = new Audio(soundFile + '.mp3');
  audio.play();
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button-container button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundFile = button.getAttribute('onclick').match(/'(.*)'/)[1];
      playSound(soundFile);
    });
  });
});

const sections = document.querySelectorAll('.instrument-section');

sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    console.log(`You entered the ${section.id} section!`);
  });
});
