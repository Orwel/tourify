import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header'
import Body from './body'
import Footer from './footer'
import App from './App.jsx'
import { Navbar } from './components/navbar.jsx'
import SupabaseProvider from './context/supabase-context.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header/>
    <Body/>
    <Footer/>
    
  </StrictMode>,

  <BrowserRouter>
  <SupabaseProvider>
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>,
  </SupabaseProvider>
   </BrowserRouter>
)
