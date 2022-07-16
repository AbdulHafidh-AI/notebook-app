import React from 'react';
import { createRoot } from 'react-dom/client';
import NotebookApp from './components/NotebookApp';
 
// styling
import './styles/index.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<NotebookApp />);