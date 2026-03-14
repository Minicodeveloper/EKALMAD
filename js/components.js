const navbarHtml = `    <nav class="navbar" id="navbar">
        <div class="container">
            <a href="/" class="logo">EKALMAD</a>
            <div class="nav-links" id="nav-links">
                <a href="/">Inicio</a>
                <a href="/marcas">Marcas</a>
                <a href="/yuraq">Yuraq</a>
                <a href="/kali">Kali</a>
                <a href="/beneficios">Beneficios</a>
                <a href="/cobertura">Cobertura</a>
            </div>
            <a href="https://wa.me/51906644944" target="_blank" class="btn btn-primary nav-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Pedir Ahora
            </a>
            <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </nav>`;

const footerHtml = `    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4 style="font-size: 1.5rem; letter-spacing: 1px;">EKALMAD</h4>
                    <p style="color: #9ca3af; margin-bottom: 20px;">Agua purificada producida con los más altos estándares de calidad en el corazón de los Andes.</p>
                    <p style="color: #9ca3af; font-size: 0.85rem;">Razón Social: Ekalmad EIRL</p>
                </div>
                <div>
                    <h4>Nuestras Marcas</h4>
                    <div class="footer-links">
                        <a href="/yuraq">Yuraq - "Es Energía"</a>
                        <a href="/yuraq#productos">Bidones y Cajas Yuraq</a>
                        <a href="/kali">Kali - Línea Premium</a>
                    </div>
                </div>
                <div>
                    <h4>Institucional</h4>
                    <div class="footer-links">
                        <a href="/beneficios">Beneficios</a>
                        <a href="/cobertura">Cobertura Local</a>
                        <a href="#">Trabaja con Nosotros</a>
                    </div>
                </div>
                <div>
                    <h4>Contáctanos</h4>
                    <div class="footer-links">
                        <p style="display: flex; align-items: center; gap: 8px; color: #9ca3af;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            906 644 944
                        </p>
                        <a href="https://wa.me/51906644944" target="_blank" style="display: flex; align-items: center; gap: 8px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            Escríbenos al WhatsApp
                        </a>
                        <p style="display: flex; align-items: start; gap: 8px; color: #9ca3af; margin-top: 5px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Cusco, Perú (Cobertura en región sur)
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="current-year"></span> Ekalmad EIRL. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>`;

class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = navbarHtml;

        // Setup navbar logic
        setTimeout(() => {
            const navbar = this.querySelector('#navbar');
            const menuToggle = this.querySelector('#menu-toggle');
            const navLinks = this.querySelector('#nav-links');

            // active link logic
            const currentPath = window.location.pathname.replace('/index.html', '').replace(/\/$/, '') || '/';
            const links = this.querySelectorAll('#nav-links a');
            links.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
                    link.style.fontWeight = 'bold';
                    if (linkPath.includes('kali')) link.style.color = 'var(--kali-blue)';
                    else if (linkPath.includes('yuraq')) link.style.color = 'var(--yuraq)';
                    else link.style.color = 'var(--primary)';
                }
            });

            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                    });
                });
            }

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }, 0);
    }
}
customElements.define('app-navbar', AppNavbar);

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerHtml;
        setTimeout(() => {
            const el = this.querySelector('#current-year');
            if (el) el.textContent = new Date().getFullYear();
        }, 0);
    }
}
customElements.define('app-footer', AppFooter);
