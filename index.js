console.log('Funguju');

const kameny = document.querySelectorAll('.kamen');
const nadpis = document.querySelector('h1');

const handleClick = (event) => {
  nadpis.textContent = `${event.target.textContent}`;
  const zvuk = new Audio(`tony/${event.target.textContent}.mp3`);
  zvuk.play();
};

kameny.forEach((kamen) => {
  kamen.addEventListener('click', handleClick);
});

// Ovládanie pomocou klávesnice

const handlePress = (event) => {
  let cislo;
  if (event.code.startsWith('Digit')) {
    cislo = Number(event.code.slice(5));
  } else if (event.code.startsWith('Numpad')) {
    cislo = Number(event.code.slice(6));
  }
  console.log(cislo);
  if (cislo >= 1 && cislo <= kameny.length) {
    const kamen = kameny[cislo - 1];
    nadpis.textContent = kamen.textContent;
    const zvuk = new Audio(`tony/${kamen.textContent}.mp3`);
    zvuk.play();
  }
};

document.addEventListener('keydown', handlePress);
