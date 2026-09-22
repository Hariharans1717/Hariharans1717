const fs = require('fs');

const headers = [
  { file: 'header-about.svg', title: '💫 ABOUT ME', color: '#00F2FE', subColor: '#a855f7' },
  { file: 'header-experience.svg', title: '💼 CURRENT EXPERIENCE', color: '#a855f7', subColor: '#ec4899' },
  { file: 'header-tech.svg', title: '🛠️ TECH STACK & SKILLS', color: '#ec4899', subColor: '#f59e0b' },
  { file: 'header-projects.svg', title: '🚀 FEATURED PROJECTS', color: '#00F2FE', subColor: '#10b981' },
  { file: 'header-education.svg', title: '🎓 EDUCATION & HONORS', color: '#f59e0b', subColor: '#a855f7' },
  { file: 'header-analytics.svg', title: '📊 GITHUB ANALYTICS & ACTIVITY', color: '#a855f7', subColor: '#00F2FE' },
  { file: 'header-connect.svg', title: '🤝 LET\'S CONNECT & COLLABORATE', color: '#10b981', subColor: '#00F2FE' }
];

headers.forEach(h => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 64" width="100%" height="64">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&amp;display=swap');

      .title-text {
        font-family: 'Outfit', sans-serif;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: 1.5px;
      }

      @keyframes shift {
        0% { stop-color: ${h.color}; }
        50% { stop-color: ${h.subColor}; }
        100% { stop-color: ${h.color}; }
      }

      @keyframes dashLine {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -40; }
      }
    </style>

    <linearGradient id="grad_${h.file.replace('.svg', '')}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${h.color}">
        <animate attributeName="stop-color" values="${h.color}; ${h.subColor}; ${h.color}" dur="4s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stop-color="${h.subColor}">
        <animate attributeName="stop-color" values="${h.subColor}; ${h.color}; ${h.subColor}" dur="4s" repeatCount="indefinite" />
      </stop>
    </linearGradient>

    <linearGradient id="bg_${h.file.replace('.svg', '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#111728"/>
    </linearGradient>

    <clipPath id="clip">
      <rect width="850" height="64" rx="14" ry="14"/>
    </clipPath>
  </defs>

  <g clip-path="url(#clip)">
    <rect width="850" height="64" fill="url(#bg_${h.file.replace('.svg', '')})"/>
    <rect x="1.5" y="1.5" width="847" height="61" rx="13" ry="13" fill="none" stroke="url(#grad_${h.file.replace('.svg', '')})" stroke-width="1.5" stroke-opacity="0.8"/>
    
    <!-- Accent Bar -->
    <rect x="25" y="18" width="5" height="28" rx="2.5" fill="url(#grad_${h.file.replace('.svg', '')})"/>

    <text x="44" y="40" class="title-text" fill="url(#grad_${h.file.replace('.svg', '')})">${h.title}</text>

    <line x1="25" y1="54" x2="825" y2="54" stroke="url(#grad_${h.file.replace('.svg', '')})" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="8 8"/>
  </g>
</svg>`;

  fs.writeFileSync(`c:\\Users\\harij\\Desktop\\github_profile\\Hariharans1717\\assets\\${h.file}`, svg, 'utf8');
});

console.log('All section headers generated!');
