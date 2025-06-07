import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function Layout(props) {
  const location = useLocation();
  const isEmbed = location.search.includes('embed=true');

  if (isEmbed) {
    // Ainda usamos o layout original para garantir que os providers estejam presentes
    return (
      <OriginalLayout {...props}>
        <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
          {props.children}
        </div>
      </OriginalLayout>
    );
  }

  return <OriginalLayout {...props} />;
}
