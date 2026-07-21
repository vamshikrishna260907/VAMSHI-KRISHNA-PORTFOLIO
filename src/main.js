const fallbackData = {
  hero: {
    eyebrow: 'AVAILABLE FOR OPPORTUNITIES',
    kicker: 'HELLO, I\'M',
    name: 'B VAMSHI',
    highlight: 'KRISHNA',
    copy: 'Full Stack Developer × AI Enthusiast\nbuilding thoughtful digital experiences.',
    actions: [
      { text: 'View my work', href: '#projects', type: 'primary' },
      { text: 'Get in touch', href: '#contact', type: 'ghost' }
    ],
    socials: [
      { label: 'in', href: 'https://www.linkedin.com/in/vamshi-krishnaz-1a5059423' },
      { label: 'gh', href: 'https://github.com/vamshikrishna260907/' },
      { label: 'ig', href: 'https://www.instagram.com/__vxmshi_?igsh=M3hyZHhwNDJhY2I4' }
    ],
    card: {
      title: 'CURRENTLY CREATING',
      code: [
        'const developer = {',
        '  name: \'Vamshi\',',
        '  focus: \'impactful things\',',
        '  status: \'building\'',
        '}'
      ],
      spark: '✦'
    }
  },
  about: {
    heading: "A curious mind\nwith a maker's\nheart.",
    lead: "I'm a full stack developer focused on transforming ideas into elegant, useful digital products.",
    body: 'From intuitive frontends to dependable backend systems, I enjoy the whole journey of building. I bring an experimental AI mindset and a practical, people-first approach to every project.',
    linkText: 'More about me',
    linkHref: '#contact',
    stats: [
      { value: '10+', label: 'Projects crafted' },
      { value: '2+', label: 'Years learning & building' },
      { value: '05', label: 'Hackathons & events' }
    ]
  },
  skills: [
    { title: 'Frontend', description: 'React, JavaScript, HTML, CSS' },
    { title: 'Backend', description: 'Node.js, Express, REST APIs' },
    { title: 'Programming', description: 'Java, Python, C++' },
    { title: 'Database', description: 'MongoDB, MySQL, Firebase' },
    { title: 'Tools', description: 'Git, GitHub, Figma, VS Code' },
    { title: 'Soft Skills', description: 'Leadership, Problem Solving, Teamwork' }
  ],
  experience: [
    { date: '2024 — Present', title: 'Full Stack Development', description: 'Building end-to-end applications and exploring modern web technologies.' },
    { date: '2024', title: 'Internship Experience', description: 'Collaborated in a professional environment to deliver real-world solutions.' },
    { date: 'Ongoing', title: 'Hackathons & Open Source', description: 'Solving ambitious problems, learning fast, and sharing what I build.' }
  ],
  projects: [
    { name: 'AI Resume Analyzer', category: 'AI / Web App', description: 'An intelligent resume analysis platform that offers actionable scoring and tailored career insights.', stack: 'React · Node.js · OpenAI', badge: '✦', color: 'pink' },
    { name: 'Campus Connect', category: 'Full Stack Platform', description: 'A student community hub for events, collaboration, and campus-wide announcements.', stack: 'React · MongoDB · Express', badge: '◌', color: 'cyan' },
    { name: 'Smart Expense Tracker', category: 'Productivity App', description: 'A clean financial dashboard that makes personal budgeting and trend tracking effortless.', stack: 'JavaScript · Charts · Firebase', badge: '↗', color: 'purple' }
  ],
  banner: "LET'S BUILD SOMETHING AMAZING — LET'S BUILD SOMETHING AMAZING — ",
  contact: {
    heading: "Have an idea?\nLet's talk.",
    body: "I'm always excited to hear about a new project, opportunity, or creative challenge.",
    email: 'hello@vamshikrishna.dev',
    emailHref: 'mailto:hello@vamshikrishna.dev'
  },
  footer: {
    brand: 'VK.',
    copyright: '© 2026 B Vamshi Krishna. Made with intent.'
  }
};

async function getContent() {
  if (window.location.protocol === 'file:') {
    return fallbackData;
  }

  try {
    const response = await fetch('/api/content');
    if (!response.ok) throw new Error('API returned ' + response.status);
    return await response.json();
  } catch (error) {
    console.warn('Could not load backend content:', error);
    return fallbackData;
  }
}

function linebreak(text) {
  return text.replace(/\n/g, '<br>');
}

function renderSkills(skills) {
  return skills.map((item, index) => `
    <article class="skill-card">
      <span>0${index + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <b>↗</b>
    </article>`).join('');
}

function renderProjects(projects) {
  return projects.map((project, index) => `
    <article class="project ${project.color}">
      <div class="project-visual">
        <span>${project.category}</span>
        <strong>${project.badge}</strong>
        <i>0${index + 1}</i>
      </div>
      <div class="project-info">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div><small>${project.stack}</small></div>
        <div class="project-links">
          <a class="text-link" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub <b>↗</b></a>
          ${project.liveDemo ? `<a class="text-link" href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">Live Demo <b>↗</b></a>` : ''}
        </div>
        <a class="button primary" href="${project.github}" target="_blank" rel="noopener noreferrer">Explore project <b>↗</b></a>
      </div>
    </article>`).join('');
}

function renderPage(content) {
  document.querySelector('#root').innerHTML = `
    <div class="noise"></div>
    <div class="orb orb-one"></div>
    <div class="orb orb-two"></div>
    <header class="nav">
      <a class="brand" href="#home">VK<span>.</span></a>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="#contact">Let's talk <b>↗</b></a>
    </header>
    <main>
      <section id="home" class="hero">
        <div class="eyebrow"><i></i> ${content.hero.eyebrow}</div>
        <p class="hero-kicker">${content.hero.kicker}</p>
        <h1>${content.hero.name}<br><em>${content.hero.highlight}</em></h1>
        <p class="hero-copy">${linebreak(content.hero.copy)}</p>
        <div class="actions">
          ${content.hero.actions.map(action => `<a class="button ${action.type}" href="${action.href}">${action.text} <b>→</b></a>`).join('')}
        </div>
        <div class="hero-meta">
          <span>SCROLL TO EXPLORE ↓</span>
          <div class="socials">
            ${content.hero.socials.map(item => `<a href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">${item.label}</a>`).join('')}
          </div>
        </div>
        <div class="hero-card">
          <div class="grid-lines"></div>
          <div class="code-label">${content.hero.card.title}</div>
          <div class="code-window">
            ${content.hero.card.code.map(line => `<p>${line}</p>`).join('')}
          </div>
          <div class="spark">${content.hero.card.spark}</div>
        </div>
      </section>
      <section id="about" class="section about">
        <p class="section-tag">01 / ABOUT ME</p>
        <div class="two-col">
          <h2>${linebreak(content.about.heading)}</h2>
          <div>
            <p class="lead">${content.about.lead}</p>
            <p>${content.about.body}</p>
            <a class="text-link" href="${content.about.linkHref}">${content.about.linkText} <b>→</b></a>
          </div>
        </div>
        <div class="stats">
          ${content.about.stats.map(stat => `
            <div>
              <strong>${stat.value}</strong>
              <p>${stat.label}</p>
            </div>`).join('')}
        </div>
      </section>
      <section id="skills" class="section">
        <p class="section-tag">02 / EXPERTISE</p>
        <h2>I work across the<br><em>entire stack.</em></h2>
        <div class="skill-grid">${renderSkills(content.skills)}</div>
      </section>
      <section id="experience" class="section experience">
        <p class="section-tag">03 / JOURNEY</p>
        <div class="two-col">
          <h2>Currently<br><em>improving</em></h2>
          <p class="lead">Improving my skills in every way possible.</p>
        </div>
        <div class="timeline">
          ${content.experience.map(item => `
            <article>
              <span>${item.date}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>`).join('')}
        </div>
      </section>
      <section id="projects" class="section projects">
        <p class="section-tag">04 / SELECTED WORK</p>
        <div class="project-head">
          <h2>Built to make<br><em>a difference.</em></h2>
          <a class="text-link" href="#contact">View all projects <b>→</b></a>
        </div>
        <div class="project-grid">${renderProjects(content.projects)}</div>
      </section>
      <section class="banner"><p>${content.banner}</p></section>
      <section id="contact" class="section contact">
        <p class="section-tag">05 / CONTACT</p>
        <h2>${linebreak(content.contact.heading)}</h2>
        <p>${content.contact.body}</p>
        <a class="email" href="${content.contact.emailHref}">${content.contact.email} <b>↗</b></a>
      </section>
    </main>
    <footer>
      <a class="brand" href="#home">${content.footer.brand}</a>
      <p>${content.footer.copyright}</p>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>`;
}

getContent().then(renderPage);

document.body.style.cursor = 'auto';

const glitterColors = ['#ff5470', '#42d8e4', '#9b7bff', '#fff4b8'];
let lastGlitterTime = 0;

document.addEventListener('pointermove', (event) => {
  const now = performance.now();
  if (now - lastGlitterTime < 45) return;
  lastGlitterTime = now;

  const glitter = document.createElement('span');
  glitter.className = 'cursor-glitter';
  glitter.style.left = `${event.clientX}px`;
  glitter.style.top = `${event.clientY}px`;
  glitter.style.background = glitterColors[Math.floor(Math.random() * glitterColors.length)];
  document.body.appendChild(glitter);
  window.setTimeout(() => glitter.remove(), 650);
});

