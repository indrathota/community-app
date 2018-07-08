import React from 'react';
import Viewport from 'components/Contentful/Viewport';

export default function Home() {
  return (
    <Viewport
      query={{ 'fields.name': 'TCO19 - Home' }}
    />
  );
}