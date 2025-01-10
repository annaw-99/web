document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

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

