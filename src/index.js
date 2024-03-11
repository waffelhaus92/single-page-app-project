import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from './app.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('info');
    const root = createRoot(rootElement);
    root.render(<MyComponent />)
});