import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './scenes/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AccountingServicesPage from './pages/AccountingServicesPage'
import TaxConsultingPage from './pages/TaxConsultingPage'
import FinancialConsultingPage from './pages/FinancialConsultingPage'
import Modal from './components/Modal/Modal'
import { AppContext } from './context/Context'

const App = () => {
    const { isModalOpen } = useContext(AppContext)

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
                <Footer />
                {isModalOpen && <Modal />}
            </div>
        </>
    )
}

export default App