
// Função para esconder/mostrar navbar no scroll (Vanilla JS)
function handleNavbarScroll() {
    let prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (prevScrollpos > currentScrollPos) {
            navbar.classList.remove('navbar-hidden');
        } else {
            navbar.classList.add('navbar-hidden');
        }
        prevScrollpos = currentScrollPos;
    });
}

// Função para header com jQuery
function handleHeaderScroll() {
    let lastScrollTop = 0;
    
    $(window).on('scroll', function() {
        let st = $(this).scrollTop();
        const header = $('.header');
        
        if (st > lastScrollTop && st > $(window).height() * 0.3) {
            header.addClass('hidden');
        } else {
            header.removeClass('hidden');
        }
        lastScrollTop = st;
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    handleNavbarScroll();
    handleHeaderScroll();
});