import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© 2025 Meu Site. Todos os direitos reservados.</p>
        <p className="mb-0">
          Desenvolvido por{' '}
          <a
            href="https://github.com/Joaquimtxt"
            className="text-light fw-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joaquimtxt
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;