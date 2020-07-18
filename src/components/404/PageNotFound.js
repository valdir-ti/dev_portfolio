import React from 'react';
import './styles.css';

export default function PageNotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada <span>:(</span></h1>
      
      <p>Desculpe, mas a página que você está tentando ver não existe.</p>
      <p>Parece que pode ser um desses dois resultados:</p>
      <ul>
        <li>Endereço errado</li>
        <li>Link desatualizado</li>
      </ul>
      <script>
        var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;
      </script>
      <script src="//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js"></script>
    </div>
  )
}
