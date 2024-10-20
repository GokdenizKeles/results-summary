reactionİnput.addEventListener("click", handleClearReaction);
memoryİnput.addEventListener("click", handleClearMemory);
verbalİnput.addEventListener("click", handleClearVerbal);
visualİnput.addEventListener("click", handleClearVisual);
btnSubmit.addEventListener("click", control)

function handleClearReaction() {
  reactionİnput.value = '';
};
function handleClearMemory() {
  memoryİnput.value = '';
};
function handleClearVerbal() {
  verbalİnput.value = '';
};
function handleClearVisual() {
  visualİnput.value = '';
};

function calculate() {
  let ortalama = ((Number(reactionİnput.value) + Number(memoryİnput.value) + Number(verbalİnput.value) + Number(visualİnput.value)) / 4)
  if(ortalama >= 100) {
    heroLimited.innerText = "";
    heroScore.innerText = '!';
    heroSubtitle.innerText = '404 Error'
    heroSubtitle.style.color = "red"
    heroFeedback.innerText = "Invalid Values. Please Insert number between 0-100!"
  }else if (ortalama < 100 && ortalama > 85) {
    heroScore.innerText = Math.floor(ortalama);
    heroLimited.innerText = "of 100";
    heroSubtitle.innerText = 'Perfect'
    heroSubtitle.style.color = "white"
    heroFeedback.innerText = "Excellent! Your performance is top-tier across all areas. Keep it up!"
  }else if (ortalama < 85 && ortalama > 65) {
    heroScore.innerText = Math.floor(ortalama);
    heroLimited.innerText = "of 100";
    heroSubtitle.innerText = 'Great'
    heroSubtitle.style.color = "white"
    heroFeedback.innerText = "Congratulations on a solid performance!  Keep pushing forward, and you'll continue to improve. Well done!"
  }else if (ortalama < 65 && ortalama > 45) {
    heroScore.innerText = Math.floor(ortalama);
    heroLimited.innerText = "of 100";
    heroSubtitle.innerText = 'Average'
    heroSubtitle.style.color = "white"
    heroFeedback.innerText = "Some areas need work, but you can improve with practice."
  }else if (ortalama < 45 && ortalama > 20) {
    heroScore.innerText = Math.floor(ortalama);
    heroLimited.innerText = "of 100";
    heroSubtitle.innerText = 'Needs improvement.'
    heroFeedback.innerText = "Focus on weaker areas to see progress."
    heroSubtitle.style.color = "white"
  }else if (ortalama < 20 && ortalama > 0) {
    heroScore.innerText = Math.floor(ortalama);
    heroLimited.innerText = "of 100";
    heroSubtitle.innerText = 'Significant improvement needed.'
    heroFeedback.innerText = "Keep practicing to raise your scores."
    heroSubtitle.style.color = "white"
  }
}

function control() {
  if((reactionİnput.value !== '')) {
    calculate()
  }else {
    summaryList.children[0].style.border = "2px solid red"
  }

  if((memoryİnput.value !== '')) {
    calculate()
  }else {
    summaryList.children[1].style.border = "2px solid red"
  }
  
  if((verbalİnput.value !== '')) {
    calculate()
  }else {
    summaryList.children[2].style.border = "2px solid red"
  }

  if((visualİnput.value !== '')) {
    calculate()
  }else {
    summaryList.children[3].style.border = "2px solid red"
  }
}



// const summaryData = [
//   {
//     name: 'reactionScore',
//     label: 'Reaction',
//     icon: 'reaction-icon.svg',
//     score: 80,
//   },
//   {
//     name: 'memoryScore',
//     label: 'Memory',
//     icon: 'memory-icon.svg',
//     score: 92,
//   },
//   {
//     name: 'verbalScore',
//     label: 'Verbal',
//     icon: 'Verbal-icon.svg',
//     score: 61,
//   },
//   {
//     name: 'visualScore',
//     label: 'Visual',
//     icon: 'Visual-icon.svg',
//     score: 73,
//   },
// ];