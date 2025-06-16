import React from 'react';
// Importa seu SearchBar customizado, já no tema sobrescrito
import SearchBar from '@theme/@easyops-cn/docusaurus-search-local/SearchBar';

export default function SearchBarWrapper(props) {
  // Aqui você pode mexer nas props, adicionar lógica, contexto, estilos etc.
  
  return (
    <div className="my-searchbar-wrapper" style={{ padding: '4px' }}>
      <SearchBar {...props} />
    </div>
  );
}