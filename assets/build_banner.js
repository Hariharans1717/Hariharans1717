const fs = require('fs');
const path = require('path');

const avatarPath = 'C:\\Users\\harij\\.gemini\\antigravity-ide\\brain\\b17ca329-4087-45e8-8d97-b51943e9f212\\developer_avatar_1790099870884.jpg';
const targetSvgPath = 'c:\\Users\\harij\\Desktop\\github_profile\\Hariharans1717\\assets\\header-banner.svg';

const b64 = fs.readFileSync(avatarPath).toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 440" width="100%" height="100%">
  <defs>
    <!-- Embedded Web Fonts -->
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&amp;family=Outfit:wght@500;700;800;900&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap');

      .mono { font-family: 'Fira Code', monospace; }
      .heading { font-family: 'Outfit', sans-serif; }
      .body-font { font-family: 'Plus Jakarta Sans', sans-serif; }

      /* Keyframe Animations */
      @keyframes borderGlow {
        0% { stroke: #00F2FE; }
        33% { stroke: #a855f7; }
        66% { stroke: #ec4899; }
        100% { stroke: #00F2FE; }
      }

      @keyframes float1 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }

      @keyframes float2 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(8px); }
      }

      @keyframes float3 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      @keyframes spinClockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes spinCounter {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      @keyframes pulseRing {
        0% { r: 5px; opacity: 0.9; }
        50% { r: 12px; opacity: 0.15; }
        100% { r: 5px; opacity: 0.9; }
      }

      @keyframes dashFlow {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: -30; }
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @keyframes particleFloat {
        0% { transform: translate(0, 0); opacity: 0.2; }
        50% { transform: translate(12px, -12px); opacity: 0.8; }
        100% { transform: translate(0, 0); opacity: 0.2; }
      }

      /* Animated Classes */
      .title-gradient {
        fill: url(#textGrad);
        filter: drop-shadow(0px 4px 18px rgba(168, 85, 247, 0.45));
      }

      .card-border {
        animation: borderGlow 8s infinite linear;
      }

      .ring-rotate1 {
        transform-origin: 690px 210px;
        animation: spinClockwise 25s infinite linear;
      }

      .ring-rotate2 {
        transform-origin: 690px 210px;
        animation: spinCounter 35s infinite linear;
      }

      .float-badge1 { animation: float1 4s ease-in-out infinite; }
      .float-badge2 { animation: float2 4.8s ease-in-out infinite; }
      .float-badge3 { animation: float3 5.2s ease-in-out infinite; }
      .float-badge4 { animation: float1 4.3s ease-in-out infinite 0.6s; }
      .float-badge5 { animation: float2 5.5s ease-in-out infinite 1.2s; }
      .float-badge6 { animation: float3 4.5s ease-in-out infinite 0.8s; }

      .pulse-ring-anim { animation: pulseRing 2.5s infinite ease-in-out; }
      .cursor-anim { animation: blink 1s infinite; }
      .laser-line { stroke-dasharray: 6 6; animation: dashFlow 1.8s linear infinite; }

      .social-pill {
        transition: transform 0.2s ease;
        cursor: pointer;
      }
      .social-pill:hover {
        transform: translateY(-2px);
      }
    </style>

    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060814"/>
      <stop offset="50%" stop-color="#0b0f22"/>
      <stop offset="100%" stop-color="#040610"/>
    </linearGradient>

    <!-- Text Gradient with Animation -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F2FE">
        <animate attributeName="stop-color" values="#00F2FE; #a855f7; #ec4899; #00F2FE" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="50%" stop-color="#a855f7">
        <animate attributeName="stop-color" values="#a855f7; #ec4899; #00F2FE; #a855f7" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stop-color="#38bdf8">
        <animate attributeName="stop-color" values="#38bdf8; #00F2FE; #a855f7; #38bdf8" dur="6s" repeatCount="indefinite" />
      </stop>
    </linearGradient>

    <!-- Avatar Gradient Glow -->
    <linearGradient id="avatarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F2FE"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>

    <!-- Radial Soft Lighting -->
    <radialGradient id="cyanGlow" cx="20%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#00F2FE" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="purpleGlow" cx="80%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Cyber Grid Pattern -->
    <pattern id="gridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
      <circle cx="32" cy="32" r="1" fill="#ffffff" fill-opacity="0.12"/>
    </pattern>

    <!-- Clips -->
    <clipPath id="cardClip">
      <rect width="920" height="440" rx="24" ry="24" />
    </clipPath>

    <clipPath id="avatarClip">
      <circle cx="690" cy="210" r="92" />
    </clipPath>

    <!-- Filters -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>

  <!-- Base Card -->
  <g clip-path="url(#cardClip)">
    <rect width="920" height="440" fill="url(#bgGrad)" />
    <rect width="920" height="440" fill="url(#cyanGlow)" />
    <rect width="920" height="440" fill="url(#purpleGlow)" />
    <rect width="920" height="440" fill="url(#gridPattern)" />

    <!-- Ambient Particles -->
    <circle cx="100" cy="70" r="2" fill="#38bdf8" style="animation: particleFloat 6s infinite ease-in-out;" />
    <circle cx="440" cy="45" r="1.5" fill="#a855f7" style="animation: particleFloat 7s infinite ease-in-out 1s;" />
    <circle cx="280" cy="400" r="2" fill="#ec4899" style="animation: particleFloat 8s infinite ease-in-out 2s;" />
    <circle cx="860" cy="360" r="1.5" fill="#38bdf8" style="animation: particleFloat 5.5s infinite ease-in-out 0.5s;" />

    <!-- Card Outer Animated Border -->
    <rect x="2" y="2" width="916" height="436" rx="23" ry="23" fill="none" class="card-border" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.8" />

    <!-- LEFT SECTION: Profile Info & Status -->
    <g transform="translate(50, 75)">
      <rect x="0" y="-18" width="138" height="26" rx="6" fill="#0f172a" fill-opacity="0.8" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1" />
      <text x="10" y="0" class="mono" font-size="13" font-weight="600" fill="#38bdf8">// hi there, I'm</text>
    </g>

    <text x="50" y="132" class="heading title-gradient" font-size="46" font-weight="900" letter-spacing="-0.5px">Hariharan S</text>

    <g transform="translate(50, 168)">
      <text x="0" y="0" class="mono" font-size="17.5" font-weight="600" fill="#f8fafc">&gt; Software Engineer Intern <tspan fill="#38bdf8">@ Invictus Tec</tspan></text>
      <rect x="420" y="-16" width="9" height="20" fill="#38bdf8" class="cursor-anim" />
    </g>

    <g transform="translate(50, 205)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="315" height="30" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#475569" stroke-opacity="0.5" stroke-width="1"/>
        <text x="12" y="19" class="body-font" font-size="12.5" font-weight="600" fill="#cbd5e1">🎓 B.Tech IT • Nandha Engineering College</text>
      </g>
      <g transform="translate(325, 0)">
        <rect x="0" y="0" width="145" height="30" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#475569" stroke-opacity="0.5" stroke-width="1"/>
        <text x="12" y="19" class="body-font" font-size="12.5" font-weight="600" fill="#cbd5e1">📍 Tamil Nadu, India</text>
      </g>
    </g>

    <g transform="translate(50, 260)">
      <rect x="0" y="0" width="295" height="36" rx="18" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1.5" />
      <circle cx="22" cy="18" r="8" fill="#10b981" fill-opacity="0.25" class="pulse-ring-anim" />
      <circle cx="22" cy="18" r="4.5" fill="#10b981" />
      <text x="38" y="22" class="body-font" font-size="13" font-weight="700" fill="#34d399">Open to internships &amp; collaborations</text>
    </g>

    <line x1="50" y1="320" x2="470" y2="320" stroke="#334155" stroke-opacity="0.5" stroke-dasharray="4 4" />

    <!-- Social Links Row -->
    <g transform="translate(50, 345)">
      <g transform="translate(0, 0)" class="social-pill">
        <rect width="100" height="36" rx="10" fill="#0b192c" stroke="#0a66c2" stroke-width="1.5" />
        <path d="M14 12h3v12h-3z M15.5 7.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5z M20 12h3v1.8h.04c.4-.75 1.4-1.8 3.16-1.8 3.38 0 4 2.2 4 5.1V24h-3v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V24h-3V12z" fill="#0a66c2" transform="scale(0.85) translate(2, 2)"/>
        <text x="36" y="23" class="body-font" font-size="12" font-weight="700" fill="#e2e8f0">LinkedIn</text>
      </g>

      <g transform="translate(110, 0)" class="social-pill">
        <rect width="95" height="36" rx="10" fill="#161b22" stroke="#8b949e" stroke-width="1.5" />
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#f0f6fc" transform="scale(0.85) translate(4, 2)"/>
        <text x="36" y="23" class="body-font" font-size="12" font-weight="700" fill="#e2e8f0">GitHub</text>
      </g>

      <g transform="translate(215, 0)" class="social-pill">
        <rect width="102" height="36" rx="10" fill="#1c160c" stroke="#ffa116" stroke-width="1.5" />
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.015 1.935l5.352 5.372a1.374 1.374 0 0 0 1.935-.015l5.406-5.79a1.374 1.374 0 0 0-.015-1.935L14.444.438A1.374 1.374 0 0 0 13.483 0z" fill="#ffa116" transform="scale(0.8) translate(8, 6)"/>
        <text x="36" y="23" class="body-font" font-size="12" font-weight="700" fill="#e2e8f0">LeetCode</text>
      </g>

      <g transform="translate(327, 0)" class="social-pill">
        <rect width="90" height="36" rx="10" fill="#241010" stroke="#ea4335" stroke-width="1.5" />
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#ea4335" transform="scale(0.75) translate(8, 6)"/>
        <text x="34" y="23" class="body-font" font-size="12" font-weight="700" fill="#e2e8f0">Email</text>
      </g>
    </g>

    <!-- RIGHT SECTION: AVATAR HUD & SKILL NODES -->
    <g transform="translate(0, 0)">
      <circle cx="690" cy="210" r="132" fill="none" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="8 12" class="ring-rotate1" />
      <circle cx="690" cy="210" r="150" fill="none" stroke="#a855f7" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="4 20" class="ring-rotate2" />
      <path d="M 690 65 L 690 75 M 690 345 L 690 355 M 545 210 L 555 210 M 825 210 L 835 210" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6" />
    </g>

    <!-- CONNECTOR LASER LINES -->
    <g fill="none" stroke-width="1.5">
      <path d="M 760 130 L 795 85" stroke="#61dafb" stroke-opacity="0.4" />
      <path d="M 760 130 L 795 85" stroke="#61dafb" stroke-opacity="0.9" class="laser-line" />

      <path d="M 780 200 L 815 170" stroke="#339933" stroke-opacity="0.4" />
      <path d="M 780 200 L 815 170" stroke="#4ade80" stroke-opacity="0.9" class="laser-line" />

      <path d="M 765 270 L 795 295" stroke="#316192" stroke-opacity="0.4" />
      <path d="M 765 270 L 795 295" stroke="#38bdf8" stroke-opacity="0.9" class="laser-line" />

      <path d="M 610 140 L 555 105" stroke="#a855f7" stroke-opacity="0.4" />
      <path d="M 610 140 L 555 105" stroke="#c084fc" stroke-opacity="0.9" class="laser-line" />

      <path d="M 605 270 L 550 300" stroke="#f59e0b" stroke-opacity="0.4" />
      <path d="M 605 270 L 550 300" stroke="#fbbf24" stroke-opacity="0.9" class="laser-line" />

      <path d="M 685 305 L 675 360" stroke="#47a248" stroke-opacity="0.4" />
      <path d="M 685 305 L 675 360" stroke="#4ae387" stroke-opacity="0.9" class="laser-line" />
    </g>

    <!-- AVATAR PORTRAIT -->
    <g transform="translate(690, 210)" filter="url(#shadow)">
      <circle cx="0" cy="0" r="102" fill="none" stroke="url(#avatarGlow)" stroke-width="3" stroke-opacity="0.9" />
      <circle cx="0" cy="0" r="95" fill="#090d16" stroke="#1e293b" stroke-width="2" />
      <image href="data:image/jpeg;base64,${b64}" x="-92" y="-92" width="184" height="184" clip-path="url(#avatarClip)" preserveAspectRatio="xMidYMid slice" />
      <circle cx="0" cy="0" r="92" fill="none" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1.5" />
    </g>

    <!-- FLOATING TECH SKILL BADGES -->
    <g transform="translate(775, 60)" class="float-badge1" filter="url(#shadow)">
      <rect x="0" y="0" width="112" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#61dafb" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#61dafb" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#61dafb" />
      <text x="30" y="21" class="body-font" font-size="12.5" font-weight="700" fill="#e0f2fe">React.js</text>
    </g>

    <g transform="translate(795, 150)" class="float-badge2" filter="url(#shadow)">
      <rect x="0" y="0" width="105" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#22c55e" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#22c55e" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#22c55e" />
      <text x="30" y="21" class="body-font" font-size="12.5" font-weight="700" fill="#dcfce7">Node.js</text>
    </g>

    <g transform="translate(775, 280)" class="float-badge3" filter="url(#shadow)">
      <rect x="0" y="0" width="120" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#38bdf8" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#38bdf8" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#38bdf8" />
      <text x="30" y="21" class="body-font" font-size="12" font-weight="700" fill="#e0f2fe">PostgreSQL</text>
    </g>

    <g transform="translate(460, 90)" class="float-badge4" filter="url(#shadow)">
      <rect x="0" y="0" width="118" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#c084fc" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#c084fc" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#c084fc" />
      <text x="30" y="21" class="body-font" font-size="12.5" font-weight="700" fill="#f3e8ff">AI &amp; LLMs</text>
    </g>

    <g transform="translate(445, 290)" class="float-badge5" filter="url(#shadow)">
      <rect x="0" y="0" width="128" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#f59e0b" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#f59e0b" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#f59e0b" />
      <text x="30" y="21" class="body-font" font-size="12.5" font-weight="700" fill="#fef3c7">Python &amp; Java</text>
    </g>

    <g transform="translate(615, 360)" class="float-badge6" filter="url(#shadow)">
      <rect x="0" y="0" width="115" height="34" rx="17" fill="#0f172a" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5" />
      <circle cx="17" cy="17" r="5" fill="#10b981" class="pulse-ring-anim" />
      <circle cx="17" cy="17" r="3" fill="#10b981" />
      <text x="30" y="21" class="body-font" font-size="12.5" font-weight="700" fill="#d1fae5">MongoDB</text>
    </g>

  </g>
</svg>`;

fs.writeFileSync(targetSvgPath, svgContent, 'utf8');
console.log('Successfully generated SVG banner file at ' + targetSvgPath);
