// ---------------------------------------------
// Dados: as 8 versões do Ryan Gosling
// ---------------------------------------------
const personas = {
  meia: {
    emoji: "🧦",
    title: "Ryan Gosling Meia",
    desc: "Você preza o conforto acima de qualquer coisa. Não importa a ocasião: se tiver um sofá e uma manta por perto, você já tá em casa. Reservado, quentinho e cheio de calor humano (literalmente)."
  },
  carro: {
    emoji: "🚗",
    title: "Ryan Gosling Carro",
    desc: "Misterioso, estiloso e sempre em movimento. Você não fala muito, mas quando aparece, todo mundo repara. Olhar de quem sabe pra onde vai, mesmo sem saber."
  },
  guerra: {
    emoji: "🎖️",
    title: "Ryan Gosling Pós-Guerra",
    desc: "Você já viu de tudo e sobreviveu pra contar a história, com uma cara séria de quem carrega mil batalhas nas costas. Intenso, resiliente e meio dramático, mas no bom sentido."
  },
  egipcio: {
    emoji: "👑",
    title: "Ryan Gosling Egípcio",
    desc: "Realeza, simples assim. Você entra em qualquer ambiente como se fosse dono do lugar. Elegante, confiante e com uma pitada de mistério milenar."
  },
  cartas: {
    emoji: "🎴",
    title: "Ryan Gosling Colecionador de Cartas",
    desc: "Nerd raiz, e com muito orgulho. Você tem uma paixão genuína por coisas que a maioria ignora, e isso te faz único. Detalhista, nostálgico e sempre pronto pra mostrar sua coleção pra quem quiser ver (ou não)."
  },
  ocupado: {
    emoji: "🍌",
    title: "Ryan Gosling Ocupado",
    desc: "Sempre correndo, sempre numa call importante, mesmo que seja com uma banana. Multitarefa nato e estiloso até na correria. Ninguém sabe direito o que você faz, mas parece muito importante."
  },
  feliz: {
    emoji: "😄",
    title: "Ryan Gosling Feliz",
    desc: "Sol, boa vibe e um sorriso fácil. Você encontra motivo pra alegria em qualquer cenário, inclusive dentro de um mundo de blocos. Leve, gente boa e a companhia perfeita pra qualquer rolê."
  },
  flor: {
    emoji: "🌼",
    title: "Ryan Gosling Flor",
    desc: "Sensível, doce e cheio de camadas, tipo uma margarida. Você prefere um dia tranquilo cercado de coisas bonitas a qualquer alvoroço. Romântico até quando finge que não é."
  }
};

// ---------------------------------------------
// Dados: as 8 perguntas do quiz
// ---------------------------------------------
const questions = [
  {
    text: "É sábado à noite. O que você tá fazendo?",
    options: [
      { text: "Enrolado numa manta, imóvel, tipo uma larva feliz", scores: { meia: 2 } },
      { text: "Dirigindo sem destino, ouvindo synthwave no talo", scores: { carro: 2 } },
      { text: "Numa festa a fantasia de história antiga", scores: { egipcio: 2 } },
      { text: "Organizando minha coleção (cartas, figuras, o que for)", scores: { cartas: 2 } }
    ]
  },
  {
    text: "Escolha uma bebida:",
    options: [
      { text: "Chá quentinho, luz baixa, playlist calma", scores: { meia: 1, flor: 1 } },
      { text: "Café puro, sem tempo pra floreio", scores: { carro: 2 } },
      { text: "Suco em taça bem dourada, porque eu mereço", scores: { egipcio: 2 } },
      { text: "O que estiver mais perto, tomado correndo entre reuniões", scores: { ocupado: 2 } }
    ]
  },
  {
    text: "Qual dessas cenas combina mais com você agora?",
    options: [
      { text: "Sobrevivendo a algo dramático, olhar de quem já viu de tudo", scores: { guerra: 2 } },
      { text: "Dia de sol, tudo tranquilo, sem pressa nenhuma", scores: { feliz: 2 } },
      { text: "Cercado de flores, clima completamente zen", scores: { flor: 2 } },
      { text: "No banco de trás, planejando o próximo golpe", scores: { carro: 1, ocupado: 1 } }
    ]
  },
  {
    text: "No trabalho (ou nos estudos), você é mais o tipo que...",
    options: [
      { text: "Vive com mil tarefas ao mesmo tempo", scores: { ocupado: 2 } },
      { text: "Leva numa boa, sorrindo pra quem passa", scores: { feliz: 2 } },
      { text: "É sério, quieto, olhar de quem carrega o mundo", scores: { guerra: 2 } },
      { text: "É obcecado por detalhes que só você percebe", scores: { cartas: 2 } }
    ]
  },
  {
    text: "Se pudesse escolher uma fantasia pra festa à fantasia, seria:",
    options: [
      { text: "Faraó", scores: { egipcio: 2 } },
      { text: "Soldado", scores: { guerra: 2 } },
      { text: "Margarida gigante", scores: { flor: 2 } },
      { text: "Meia de Natal", scores: { meia: 2 } }
    ]
  },
  {
    text: "Qual desses objetos representa melhor sua personalidade?",
    options: [
      { text: "Um carro velho, mas com estilo de sobra", scores: { carro: 2 } },
      { text: "Uma banana (não pergunta, só confia)", scores: { ocupado: 2 } },
      { text: "Um baralho de cartas raras", scores: { cartas: 2 } },
      { text: "Uma florzinha branca", scores: { flor: 2 } }
    ]
  },
  {
    text: "Escolha uma palavra que as pessoas usariam pra te descrever:",
    options: [
      { text: "Aconchegante", scores: { meia: 2 } },
      { text: "Intenso", scores: { guerra: 1, egipcio: 1 } },
      { text: "Alegre", scores: { feliz: 2 } },
      { text: "Nostálgico", scores: { cartas: 1, flor: 1 } }
    ]
  },
  {
    text: "Por fim, qual emoji resume seu humor hoje?",
    options: [
      { text: "😌 tranquilo", scores: { meia: 1, flor: 1 } },
      { text: "😎 estiloso", scores: { carro: 2 } },
      { text: "😄 feliz da vida", scores: { feliz: 2 } },
      { text: "🏃 correria total", scores: { ocupado: 2 } }
    ]
  }
];

// Pontuação máxima possível por pergunta (usado pra calcular % no resultado final)
const MAX_POINTS_PER_QUESTION = 2;
const TOTAL_POINTS = questions.length * MAX_POINTS_PER_QUESTION;

// ---------------------------------------------
// Estado
// ---------------------------------------------
let currentIndex = 0;
let scores = {};

function resetScores() {
  scores = {};
  Object.keys(personas).forEach(key => { scores[key] = 0; });
}

// ---------------------------------------------
// Elementos
// ---------------------------------------------
const progressEl = document.getElementById("progress");
const quizCard = document.getElementById("quiz-card");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");

const resultCard = document.getElementById("result-card");
const resultBadge = document.getElementById("result-badge");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const breakdownToggle = document.getElementById("breakdown-toggle");
const breakdownEl = document.getElementById("breakdown");
const restartBtn = document.getElementById("restart-btn");

// ---------------------------------------------
// Progresso (pontinhos)
// ---------------------------------------------
function renderProgressDots() {
  progressEl.innerHTML = "";
  questions.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    progressEl.appendChild(dot);
  });
}

function updateProgressDots() {
  const dots = progressEl.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("dot--active", "dot--done");
    if (i < currentIndex) dot.classList.add("dot--done");
    if (i === currentIndex) dot.classList.add("dot--active");
  });
}

// ---------------------------------------------
// Renderizar pergunta
// ---------------------------------------------
function renderQuestion() {
  const q = questions[currentIndex];
  questionCountEl.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  questionTextEl.textContent = q.text;

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectOption(opt));
    optionsEl.appendChild(btn);
  });

  updateProgressDots();
}

function selectOption(opt) {
  Object.entries(opt.scores).forEach(([key, val]) => {
    scores[key] = (scores[key] || 0) + val;
  });

  quizCard.classList.add("card--leaving");

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
      quizCard.classList.remove("card--leaving");
    } else {
      showResult();
    }
  }, 200);
}

// ---------------------------------------------
// Resultado
// ---------------------------------------------
function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const winnerKey = sorted[0][0];
  const winner = personas[winnerKey];

  resultBadge.textContent = winner.emoji;
  resultTitle.textContent = `Você é o(a) ${winner.title}`;
  resultDesc.textContent = winner.desc;

  breakdownEl.innerHTML = "";
  sorted.forEach(([key, value]) => {
    const persona = personas[key];
    const pct = Math.round((value / TOTAL_POINTS) * 100);

    const row = document.createElement("div");
    row.className = "breakdown-row";

    const label = document.createElement("span");
    label.className = "breakdown-label";
    label.textContent = `${persona.emoji} ${persona.title.replace("Ryan Gosling ", "")}`;

    const track = document.createElement("div");
    track.className = "breakdown-track";
    const fill = document.createElement("div");
    fill.className = "breakdown-fill";
    fill.style.width = "0%";
    track.appendChild(fill);

    const pctLabel = document.createElement("span");
    pctLabel.className = "breakdown-pct";
    pctLabel.textContent = `${pct}%`;

    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(pctLabel);
    breakdownEl.appendChild(row);

    requestAnimationFrame(() => { fill.style.width = `${pct}%`; });
  });

  breakdownEl.classList.add("hidden");
  breakdownToggle.textContent = "Ver compatibilidade completa";
}

breakdownToggle.addEventListener("click", () => {
  const isHidden = breakdownEl.classList.toggle("hidden");
  breakdownToggle.textContent = isHidden ? "Ver compatibilidade completa" : "Esconder compatibilidade";
});

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  resetScores();
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
});

// ---------------------------------------------
// Início
// ---------------------------------------------
resetScores();
renderProgressDots();
renderQuestion();
