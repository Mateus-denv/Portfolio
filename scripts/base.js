// Efeito Matrix
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = document.querySelector('.hero-background').offsetHeight;

const letters = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Criar linhas de código
const codeSnippets = [
  'function createAwesome() { return true; }',
  'const skills = [\'HTML\', \'CSS\', \'JavaScript\'];',
  'while(coding) { keepLearning(); }',
  'if (dedicated) { success(); }',
  'console.log("Hello World!");',
  'npm install creativity',
  'git commit -m "Building dreams"'
];

const codeLinesContainer = document.getElementById('code-lines');

function createCodeLine() {
  const codeLine = document.createElement('div');
  codeLine.className = 'code-line';
  codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  codeLine.style.top = Math.random() * 80 + 10 + '%';
  codeLine.style.animationDelay = Math.random() * 3 + 's';
  codeLinesContainer.appendChild(codeLine);

  setTimeout(() => {
    codeLine.remove();
  }, 8000);
}

setInterval(createCodeLine, 3000);
createCodeLine();

// Redimensionar canvas
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector('.hero-background').offsetHeight;
});

// Efeito de digitação no nome
const typingName = document.getElementById('typing-name');
const nameText = 'Mateus Santos ;)';
let nameIndex = 0;

function typeWriterName() {
  if (nameIndex < nameText.length) {
    typingName.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeWriterName, 100);
  } else {
    // Remove o cursor do nome quando terminar
    typingName.parentElement.querySelector('.name-highlight').style.setProperty('--show-cursor', 'none');
    // Inicia a digitação do cargo após 500ms
    setTimeout(typeWriterRole, 500);
  }
}

// Efeito de digitação no cargo
const typingRole = document.getElementById('typing-role');
const roleText = 'Desenvolvedor Júnior Back-End | C# | .NET | SQL Server';
let roleIndex = 0;

function typeWriterRole() {
  if (roleIndex < roleText.length) {
    typingRole.textContent += roleText.charAt(roleIndex);
    roleIndex++;
    setTimeout(typeWriterRole, 80);
  }
}

// Inicia a digitação do nome imediatamente
typeWriterName();

// Inicia a digitação do hero após tudo terminar
setTimeout(typeWriter, (nameText.length * 100) + 500 + (roleText.length * 80) + 500);