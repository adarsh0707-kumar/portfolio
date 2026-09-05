import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import './styles/tokens.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
