

async function loadJSON(path){
  try {
    const res = await fetch(path);
    if(!res.ok) throw new Error('Failed to load '+path);
    return await res.json();
  } catch(err) {
    console.warn(err);
    return [];
  }
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function createSnippetPreview(code, lang){
  const pre = document.createElement('pre');
  const codeEl = document.createElement('code');
  codeEl.className = lang ? 'language-'+lang : 'language-js';
  codeEl.innerHTML = escapeHtml(code);
  pre.appendChild(codeEl);
  return pre;
}

function renderProjectCard(project){
  const card = document.createElement('article');
  card.className = 'project-card animate__animated animate__fadeInUp';

  const meta = document.createElement('div');
  meta.className = 'project-meta';
  const title = document.createElement('div');
  title.className = 'project-title';
  title.textContent = project.title;
  const tags = document.createElement('div');
  tags.className = 'project-tags';
  tags.textContent = (project.tags || []).join(' · ');
  meta.appendChild(title);
  meta.appendChild(tags);

  const snippetWrap = document.createElement('div');
  snippetWrap.className = 'snippet-preview';
  const snippetEl = createSnippetPreview(project.snippet || '// no snippet', project.lang || 'js');
  snippetWrap.appendChild(snippetEl);

  const snippetMeta = document.createElement('div');
  snippetMeta.className = 'snippet-meta';
  const hint = document.createElement('div');
  hint.className = 'small muted';
  hint.textContent = 'click once to read, click again to open repo';
  const viewBtn = document.createElement('button');
  viewBtn.className = 'btn-small';
  viewBtn.textContent = 'view on github';
  viewBtn.onclick = (e)=>{ e.stopPropagation(); if(project.github) window.open(project.github,'_blank'); };
  snippetMeta.appendChild(hint);
  snippetMeta.appendChild(viewBtn);

  const desc = document.createElement('div');
  desc.className = 'desc';
  desc.textContent = project.description || 'No description provided — blame 24stefan';

  // AI Tooltip - experimental projects card 
  const tooltip = document.createElement('div');
  tooltip.className = 'ai-tooltip';
  tooltip.textContent = project.aiTip || 'Analyzing chaos…';
  card.appendChild(tooltip);

  let expanded = false;
  card.addEventListener('click', e=>{
    e.preventDefault();
    if(!expanded){
      card.classList.add('expanded');
      expanded = true;
      Prism.highlightElement(snippetEl);
      setTimeout(()=>card.scrollIntoView({behavior:'smooth', block:'center'}),150);
    } else {
      if(project.github) window.open(project.github,'_blank');
    }
  });

  card.appendChild(meta);
  card.appendChild(snippetWrap);
  card.appendChild(snippetMeta);
  card.appendChild(desc);
  return card;
}


document.querySelectorAll('.tag').forEach(tag=>{
  tag.addEventListener('click', ()=>{
    const filter = tag.dataset.filter;
    const cards = document.querySelectorAll('.project-card');
    let visible=false;
    cards.forEach(c=>{
      const tags = c.querySelector('.project-tags').textContent.toLowerCase();
      if(tags.includes(filter)){
        c.classList.remove('fade-out');
        c.classList.add('fade-in');
        c.style.display='block';
        visible=true;
      } else {
        c.classList.remove('fade-in');
        c.classList.add('fade-out');
        setTimeout(()=>c.style.display='none',400);
      }
    });
    const empty = document.getElementById('projects-empty') || document.getElementById('experimental-empty');
    if(empty) empty.hidden=visible;
  });
});

async function loadProjects(){
  const grid = document.getElementById('projects-grid');
  const empty = document.getElementById('projects-empty');
  const projects = await loadJSON('data/projects.json');
  grid.innerHTML = '';
  if(projects.length === 0){ empty.hidden = false; return; }
  empty.hidden = true;
  projects.forEach(p=>grid.appendChild(renderProjectCard(p)));
}

async function loadExperimentalProjects(){
  const grid = document.getElementById('experimental-grid');
  const empty = document.getElementById('experimental-empty');
  const projects = await loadJSON('data/experimental.json');
  grid.innerHTML = '';
  if(projects.length === 0){ empty.hidden = false; return; }
  empty.hidden = true;
  projects.forEach(p=>grid.appendChild(renderProjectCard(p)));
}


document.querySelectorAll('.tag').forEach(tag=>{
  tag.addEventListener('click', ()=>{
    const filter = tag.dataset.filter;
    const cards = document.querySelectorAll('.project-card');
    let visible=false;
    cards.forEach(c=>{
      const tags = c.querySelector('.project-tags').textContent.toLowerCase();
      if(tags.includes(filter)){
        c.style.display='block';
        visible=true;
      } else c.style.display='none';
    });
    document.getElementById('projects-empty').hidden=visible;
  });
});

document.addEventListener('DOMContentLoaded', ()=>{
  loadProjects();
  loadExperimentalProjects();
});

const typingText = document.getElementById('typing-text');
const messages = [
  "AI assistant: 24stefan is currently debugging himself...",
  "AI assistant: Warning! Humility module not found",
  "AI assistant: If I were perfect, I wouldn't need comments",
  "AI assistant: 404 confidence not found",
  "AI assistant: Refactoring life… but skipping sleep",
  "AI assistant: Stack overflow in brain detected",
  "AI assistant: Writing code to procrastinate writing code",
  "AI assistant: Running on caffeine and regret",
  "AI assistant: Commit messages more honest than resume",
  "AI assistant: Accidentally invented a new bug",
  "AI assistant: Pushing code, praying to CI/CD gods",
  "AI assistant: Optimizing chaos, not code",
  "AI assistant: Debugging life, undefined results",
  
];

let msgIndex = 0;
let charIndex = 0;

function typeMessage() {
    if(msgIndex >= messages.length) msgIndex = 0; 
    const msg = messages[msgIndex];
    if(charIndex < msg.length) {
        typingText.textContent += msg.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 50);
    } else {
        setTimeout(() => {
            typingText.textContent = "";
            charIndex = 0;
            msgIndex++;
            typeMessage();
        }, 2500); 
    }
}

document.addEventListener('DOMContentLoaded', typeMessage);
