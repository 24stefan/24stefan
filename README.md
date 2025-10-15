# Update feaatures:
 - 1. Put my Image behind text with black  and white filter,  with very  low  opacity. But just  on  the home page under  this section. 
 ```
 <section id="hero-section" class="hero animate__animated animate__fadeIn">
  <h1 class="hero-title">I build stuff that sometimes (never) wroks.</h1>
  <p class="hero-sub">dumb code, chaos, and the occasional successful compilation - I don't know that am I doing</p>
  <div class="hero-cta">
    <a class="btn ghost" href="#projects-section">see projects (i didn't ragequit these)</a>
    <a class="btn ghost" href="#about-section">about (read my excuses)</a>
  </div>
</section>

 ``` Here's current css code for that section, everything  should stay  the same except picture.  Picture location is in ./pictures/. Css:
 ```
 .hero {
    padding: 48px 0;
}

.hero-title {
    font-size: 36px;
    margin: 0 0 8px;
    font-weight: 700;
}

.hero-sub {
    color: var(--muted);
    margin: 0 0 18px;
}

.hero-cta .btn {
    display: inline-block;
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    margin-right: 10px;
    transition: all 0.3s;
}

.btn.primary {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    color: #000000;
    border: none;
}

.btn.ghost {
    background: transparent;
    color: var(--fg);
    border: 1px solid rgba(255, 255, 255, 0.06);
}

 ```

- .2 Update request:
 - Animate web page sections,  on scroll  to  another  section content should fly in from one side every time when you scroll.
 - Add loading spinner before opening the page,  use  some creative spinner.
 -> write all of  that in /css/animation.css  file 
 html: <!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>24stefan — stupidity & code</title>
<meta name="description" content="Stupid coder." />
<meta name="theme-color" content="#0d0d0d" />

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

<!-- Prism for minimal syntax highlighting -->
<link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.css" rel="stylesheet" />

<!-- Animations library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

<link rel="stylesheet" href="css/style.css" />
</head>
<body>



<main class="container">

<section id="hero-section" class="hero animate__animated animate__fadeIn">
  <h1 class="hero-title">I build stuff that sometimes (never) wroks.</h1>
  <p class="hero-sub">dumb code, chaos, and the occasional successful compilation - I don't know that am I doing</p>
  <div class="hero-cta">
    <a class="btn ghost" href="#projects-section">see projects (i didn't ragequit these)</a>
    <a class="btn ghost" href="#about-section">about (read my excuses)</a>
  </div>
</section>

<section id="about-section" class="about card animate__animated animate__fadeInUp">
  <h2>About — or how i rationalize my commit messages</h2>
  <p class="muted">
    i'm 24stefan — a  tinkerer of bits and bytes. i write code that sometimes works, debug things that shouldn’t exist, and occasionally solve real problems(yet to happen).  
  
  </p>
  <ul class="chips">
    <li> Linux tinkering · kernel-level curiosity</li>
    <li> 3D modeling · Physics approximations</li>
    <li>Chess nerd · Wannabe neovim user</li>
  </ul>
  <p class="small italic">
 If something breaks, blame  AI or 24stefan — probably all three.
  </p>
</section>


<section id="projects-section" class="projects animate__animated animate__fadeInUp">
  <h2>Projects — personal toys, and once-functional scripts</h2>
  <p class="muted">click a snippet once to read a short description, click again to open the repo. filter: 
    <span class="tag" data-filter="linux">linux</span> 
    <span class="tag" data-filter="web">web</span> 
    <span class="tag" data-filter="other">other</span>
  </p>
  <div id="projects-grid" class="grid"></div>
  <div id="projects-empty" class="empty-card" hidden>no projects matched your filter — blame 24stefan</div>
</section>

<section id="experimental-section" class="projects card animate__animated animate__fadeInUp">
  <h2>Experimental projects — things that I  don't know how  to finsih</h2>
  <p class="muted">
    these are my “I promise imma finish this” projects: 
    <span class="tag" data-filter="linux">linux</span> 
    <span class="tag" data-filter="web">web</span> 
    <span class="tag" data-filter="other">other</span>
  </p>
  <div id="experimental-grid" class="grid"></div>
  <div id="experimental-empty" class="empty-card" hidden>
    no experimental projects matched your filter — blame 24stefan
  </div>
</section>

<section id="contact-section" class="contact-block animate__animated animate__fadeInUp">
  <h2>contact — don’t stalk me, just say hi</h2>
  <p class="muted">
    email: <a href="mailto:24stefan@example.com">24s.stevanovic@gmail.com</a>
  </p>

  
  <div class="typing-message">
    <span id="typing-text"></span><span class="cursor">|</span>
  </div>

  <div class="contact-links">
    <a href="https://instagram.com/meier_link__" target="_blank" rel="noopener noreferrer" class="social-link instagram">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.6.1 3.7.3 2.7.5 1.9.8 1.1 1.5c-.8.7-1.3 1.5-1.5 2.5C-.1 5.4 0 6.5 0 7.8 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.2 2.4.4 3.3.2 1 .7 1.8 1.5 2.5.8.7 1.5 1.1 2.5 1.3 1 .1 2.1.2 3.3.4C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.4-.2 3.3-.4 1-.2 1.8-.7 2.5-1.5.7-.8 1.1-1.5 1.3-2.5.1-1 .2-2.1.4-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.4-.4-3.3-.2-1-.7-1.8-1.5-2.5-.8-.7-1.5-1.1-2.5-1.3C17.4.1 16.3 0 15 0 13.7 0 13.3 0 12 0z"/><path fill="currentColor" d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.2a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
    </a>

    <a href="https://linkedin.com/in/stefanstevanovic" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5S3.34 9.5 4.98 9.5 7.96 8.16 7.96 6.5 6.62 3.5 4.98 3.5zM2.4 21h5.16v-11H2.4v11zM9.68 10h4.92v1.52h.07c.69-1.31 2.38-2.69 4.91-2.69 5.26 0 6.23 3.46 6.23 7.95V21h-5.16v-6.65c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V21H9.68v-11z"/></svg>
    </a>
  </div>
</section>




</main>

<footer class="site-footer">
  <p>© 24stefan — made with Punch Monster, chaos & lack of care for responsiveness</p>
</footer>


<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="js/main.js"></script>
<script>
// this should ensure smooth scroll ?
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
</script>
</body>
</html>
 css:/* --------------------------
   Root Variables 
   note: I should update it when I GET TO KNOW THAT I WANT DAMN!
--------------------------- */
:root {
    --bg: #000000;
    --fg: #ffffff;
    --muted: rgba(255, 255, 255, 0.6);
    --accent: #ffffff;
    --accent-2: #aaaaaa;
    --card: rgba(255, 255, 255, 0.03);
    --mono: 'Fira Mono', monospace;
}

/* --------------------------
   Global Styles
--------------------------- */
body {
    background-color: var(--bg);
    color: var(--fg);
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}


.brand .dot {
    opacity: 0.6;
    margin-left: 6px;
}


.nav a {
    color: var(--muted);
    text-decoration: none;
    margin-left: 18px;
    font-size: 14px;
    transition: color 0.3s;
}

.nav a:hover {
    color: var(--fg);
}


.hero {
    position: relative;
    padding: 48px 0;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 80%;                /* only 80% width of the hero section */
    height: 100%;
    background: url("../pictures/L.jpg") left center / cover no-repeat;
    filter: grayscale(100%) brightness(0.4);
    opacity: 0.15;
    transform: translateY(-50%); /* keeps it vertically centered */
    z-index: 0;
}

/* keep text above the image */
.hero > * {
    position: relative;
    z-index: 1;
}


.hero-title {
    font-size: 36px;
    margin: 0 0 8px;
    font-weight: 700;
}

.hero-sub {
    color: var(--muted);
    margin: 0 0 18px;
}

.hero-cta .btn {
    display: inline-block;
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    margin-right: 10px;
    transition: all 0.3s;
}

.btn.primary {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    color: #000000;
    border: none;
}

.btn.ghost {
    background: transparent;
    color: var(--fg);
    border: 1px solid rgba(255, 255, 255, 0.06);
}


.card {
    background: var(--card);
    padding: 20px;
    margin: 18px 0;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.02);
}

.small {
    font-size: 20px;
    color: var(--muted);
}

.italic {
    font-style: italic;
}

.muted {
    color: var(--muted);
}

.chips {
    list-style: none;
    padding: 0;
    margin: 12px 0;
    display: flex;
    flex-wrap: wrap;
}

.chips li {
    background: rgba(255, 255, 255, 0.03);
    padding: 6px 10px;
    border-radius: 8px;
    margin-right: 8px;
    font-size: 13px;
}

.projects {
    margin-top: 8px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 14px;
    margin-top: 14px;
}

.project-card {
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 12px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s;
}

.project-card:hover {
    box-shadow: 0 6px 24px rgba(255, 255, 255, 0.1);
}

.project-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.project-title {
    font-family: var(--mono);
    font-weight: 600;
    color: var(--fg);
}

.project-tags {
    font-size: 12px;
    color: var(--muted);
}


.snippet-preview {
    background: #0b0b0b;
    padding: 10px;
    border-radius: 8px;
    max-height: 120px;
    overflow: auto;
    border: 1px solid rgba(255, 255, 255, 0.03);
    color: var(--fg);
}

.snippet-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.btn-small {
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: transparent;
    color: var(--fg);
    font-size: 13px;
    cursor: pointer;
}

/* --------------------------
   Project Expansion
--------------------------- */
.desc {
    margin-top: 10px;
    color: var(--muted);
    display: none;
}

.project-card.expanded .desc {
    display: block;
}

.project-card.expanded .snippet-preview {
    max-height: 220px;
}

/* --------------------------
   Empty Cards
--------------------------- */
.empty-card {
    background: linear-gradient(180deg, #0f0f0f, #0b0b0b);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: var(--muted);
}



/* --------------------------
   Footer
--------------------------- */
.site-footer {
    padding: 20px 0;
    color: var(--muted);
    text-align: center;
}


/* --------------------------
   Contact Block 
--------------------------- */
/* Typing AI message */
.typing-message {
    font-family: var(--mono);
    color: #00ff228d;
    font-size: 14px;
    margin-bottom: 12px;
    min-height: 20px;
    white-space: nowrap;
    overflow: hidden;
}

.cursor {
    display: inline-block;
    background-color: #dfecec;
    width: 2px;
    animation: blink 1s infinite;
    margin-left: 2px;
}

/* blinking cursor */
@keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
}

.contact-block {
    background: #070707;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.05);
    font-family: var(--mono);
    color: var(--fg);
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    position: relative;
}


.contact-block h2 {
    font-size: 22px;
    font-weight: 600;
    position: relative;
    display: inline-block;
    margin-bottom: 12px;
}

.contact-block h2::after {
    content: "";
    display: block;
    height: 2px;
    width: 60%;
    background: linear-gradient(90deg, #03f9e97b, #00c3ffaf);
    margin-top: 4px;
    border-radius: 2px;
}


.contact-links {
    display: flex;
    gap: 16px;
}

.social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
}

.social-link svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease, fill 0.3s ease;
    fill: white;
}


.social-link:hover {
    background: linear-gradient(45deg, #00fff0, #00c3ff);
    box-shadow: 0 0 12px #00fff0, 0 0 24px #00c3ff;
}

.social-link:hover svg {
    transform: scale(1.2) rotate(10deg);
    fill: black;
}


.contact-block a {
    color: #00fff0;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.contact-block a:hover {
    color: #00c3ff;
}


/* --------------------------
   Responsive
--------------------------- */
@media (max-width: 540px) {
    .hero-title {
        font-size: 26px;
    }

    .container {
        padding: 16px;
    }
}

/* --------------------------
   Reduced Motion
--------------------------- */
@media (prefers-reduced-motion: reduce) {
    * {
        transition: none !important;
    }
}
/* Full-screen sections with scroll snapping
 
*/
html, body {
  height: 100%;
  scroll-behavior: smooth;
}

main.container {
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

main.container > section {
  height: 100vh; /* full viewport height */
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}


.hero-title { font-size: 4vw; line-height: 1.2; }
.hero-sub { font-size: 2vw; }
@media(max-width:768px){
  .hero-title { font-size: 6vw; }
  .hero-sub { font-size: 3.5vw; }
}

#experimental-grid .project-card {
  border: 1px solid rgba(0,255,200,0.3);
  background: rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

#experimental-grid .project-card:hover {
  transform: scale(1.03) rotate(-1deg);
  box-shadow: 0 0 20px rgba(0,255,200,0.8), 0 0 40px rgba(0,255,200,0.4);
}

.project-card .ai-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,255,200,0.9);
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.project-card:hover .ai-tooltip {
  opacity: 1;
}


.project-card.fade-out { opacity: 0; transition: opacity 0.4s ease; }
.project-card.fade-in { opacity: 1; transition: opacity 0.4s ease; }

p{
    font-size: 24px;
}
h2{
    font-size: 34px;
}
