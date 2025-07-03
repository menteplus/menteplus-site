
(function() {
  const style = document.createElement('style');
  style.textContent = `
    #footer-links {
      position: fixed;
      bottom: 0;
      left: 0; right: 0;
      background: #f9fafb;
      border-top: 1px solid #ccc;
      padding: 8px 0;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 14px;
      z-index: 10000;
    }
    #footer-links a {
      margin: 0 12px;
      color: #2563eb;
      text-decoration: none;
    }
    #footer-links a:hover {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);

  const footer = document.createElement('div');
  footer.id = 'footer-links';
  footer.innerHTML = `
    <a href="https://menteplus.github.io/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> |
    <a href="https://menteplus.github.io/termos-de-uso/" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
  `;
  document.body.appendChild(footer);
})();
