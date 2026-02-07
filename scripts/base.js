document.addEventListener('DOMContentLoaded', () => {
    
    // === EFEITO DE DIGITAÇÃO ===
    const words = ["Back-end", "Freelancer", "Criativo"];
    let i = 0;
    const typingEffect = document.getElementById('typing-role');
    
    if(typingEffect) {
        setInterval(() => {
            i = (i + 1) % words.length;
            typingEffect.textContent = words[i];
        }, 2500);
    }

    // === BOTÃO VOLTAR AO TOPO ===
    const backToTopBtn = document.getElementById('backToTop');

    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});