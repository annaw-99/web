document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.querySelector('.terminal-content code');
    if (codeElement) {
        const text = codeElement.innerHTML;
        const highlighted = text
            .replace(/"([^"]+)":/g, '<span class="key">"$1"</span>:')
            .replace(/"([^"]+)"/g, '<span class="string">"$1"</span>')
            .replace(/[\[\]{}]/g, '<span class="bracket">$&</span>');
        codeElement.innerHTML = highlighted;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const hiddenContent = document.getElementById('hidden-content');
        const blinkText = document.querySelector('.blink-text');
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
            blinkText.style.display = 'none';
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 's') {
        const skillsContent = document.getElementById('skills-content');
        const pHint = document.querySelector('.p-hint');
        if (skillsContent.style.display === 'none') {
            skillsContent.style.display = 'block';
            pHint.style.display = 'none';
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'p') {
        const projectsContent = document.getElementById('projects-content');
        const pressHint = document.querySelector('.press-hint');
        if (projectsContent.style.display === 'none') {
            projectsContent.style.display = 'block';
            pressHint.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const projectTabs = document.querySelectorAll('.project-tab');
    const tabHats = document.querySelectorAll('.tab-hat');
    
    projectTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            projectTabs.forEach(t => t.style.color = '');
            tabHats.forEach(h => h.style.color = '');
            
            this.style.color = '#4EC9B0';
            const hatElement = document.querySelector(`.tab-hat[data-project="${this.dataset.project}"]`);
            if (hatElement) {
                hatElement.style.color = '#4EC9B0';
            }
            
            const projectNum = this.dataset.project;
            
            const projects = {
                1: {
                    title: "HUEY (hugh-eey)",
                    description: "a full-stack waitlist platform. ",
                    tech: "tech stack: Next.js | Prisma | NextAuth.js",
                    links: [
                        { text: "[view github repo] ", url: "https://github.com/annaw-99/nextjs-hackathon" },
                        { text: "[view website]", url: "https://nextjs-hack.vercel.app/" }
                    ]
                },
                2: {
                    title: "THE RAG CHATBOT",
                    description: "a chatbot with custom (file-upload) knowledge base.",
                    tech: "tech stack: Python | Docker | Streamlit | Langchain",
                    links: [
                        { text: "[view github repo]", url: "https://github.com/annaw-99/RAG-chatbot" }
                    ]
                },
                3: {
                    title: "THE WEB",
                    description: "a (this) personal website.",
                    tech: "tech stack: HTML | CSS | JavaScript",
                    links: [
                        { text: "[view github repo] ", url: "https://github.com/annaw-99/web" },
                        { text: "[view website]", url: "https://annaw-99.github.io/web/" }
                    ]
                }
            };
            
            if (projects[projectNum]) {
                const project = projects[projectNum];
                
                document.querySelector('.project-title').innerHTML = 
                    `<span style="color: #4EC9B0">${project.title}</span>`;
                
                document.querySelector('.project-description').innerHTML = 
                    `<span style="color: #FFFFFF">${project.description}</span>`;
                
                document.querySelector('.project-tech').innerHTML = 
                    `<span style="color: #00BFFF">${project.tech}</span>`;
                
                // Create links
                const linksHtml = project.links.map(link => 
                    `<a href="${link.url}" class="terminal-link" target="_blank">${link.text}</a>`
                ).join('');
                
                document.querySelector('.project-links').innerHTML = linksHtml;
            }
        });
    });
    
    projectTabs[0].click();
});

// Function to check if device is mobile
function isMobile() {
    return window.innerWidth <= 1000;
}

document.addEventListener('DOMContentLoaded', function() {
    if (isMobile()) {
        const mobileMessage = document.createElement('div');
        mobileMessage.className = 'mobile-message';
        mobileMessage.innerHTML = `
            <div class="mobile-warning">
                <p>The mobile version of this site is currently under development.</p>
                <p>Please visit using a desktop browser for the best experience.</p>
            </div>
        `;
        document.body.appendChild(mobileMessage);
        
        // Hide the main content
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.style.display = 'none';
        }
        
        // Hide all hints
        const hints = document.querySelectorAll('.press-hint, .p-hint, .blink-text');
        hints.forEach(hint => {
            hint.style.display = 'none';
        });
        
        return; 
    }
    
});
