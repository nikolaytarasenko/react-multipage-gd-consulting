import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AccountingServicesPage from './pages/AccountingServicesPage'
import TaxConsultingPage from './pages/TaxConsultingPage'
import FinancialConsultingPage from './pages/FinancialConsultingPage'

const App = () => {
    return (
        <>
            <div className="page">
                <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/accounting-services" element={<AccountingServicesPage />} />
                        <Route path="/tax-consulting" element={<TaxConsultingPage />} />
                        <Route path="/financial-consulting" element={<FinancialConsultingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App