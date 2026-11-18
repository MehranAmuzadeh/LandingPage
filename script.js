
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');

    // Hamburger butonuna tıklayınca menüyü aç/kapat
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
    menu.classList.toggle('open');
    });

    // Menüdeki bir linke tıklanınca menüyü otomatik kapat
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('open');
        });
    });

    // Ekran büyüyünce (masaüstüne dönünce) menüyü sıfırla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
        toggle.classList.remove('active');
    menu.classList.remove('open');
        }
    });
