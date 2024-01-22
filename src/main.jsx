import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { AppProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                <ScrollToTop />
                <App/>
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>,
)