import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App.jsx';
import Privacy from './Privacy.jsx';
import Terms from './Terms.jsx';
import Faq from './Faq.jsx';
import PressKit from './PressKit.jsx';

const pages = {
  '/privacy': [Privacy, 'Privacy Policy | The Forgotten House'],
  '/terms': [Terms, 'Terms of Service | The Forgotten House'],
  '/faq': [Faq, 'FAQ | The Forgotten House'],
  '/press': [PressKit, 'Press Kit | The Forgotten House'],
};
const [Page, title] = pages[window.location.pathname.replace(/\/+$/, '')] ?? [App];
if (title) document.title = title;
createRoot(document.getElementById('root')).render(<StrictMode><Page /></StrictMode>);
