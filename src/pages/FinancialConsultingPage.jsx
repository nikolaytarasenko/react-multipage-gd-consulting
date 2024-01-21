import CommonHero from '../components/CommonHero/CommonHero'
import FinancialServices from '../scenes/FinancialServices/FinancialServices'
import Reputation from '../scenes/Reputation/Reputation'
import CommonSolutions from '../components/CommonSolutions/CommonSolutions'

import heroImage from '../assets/fin-consulting-hero.png'
import solutionsImg from "../assets/fin-solutions.png";
import CommonAdvantages from '../components/CommonAdvantages/CommonAdvantages'
import Consultation from '../scenes/Consultation/Consultation'
import Social from '../scenes/Social/Social'

const FinancialConsultingPage = () => {
    const heroSectionData = {
        title: 'Financial Consulting',
        text: [
            'We know how to succeed together with clients, no matter how difficult the situation may be. Our experts are happy to help entrepreneurs in all industries, from large corporations to small businesses, private investors and startups.',
            'We also provide services in opening and supporting a business in the UAE.'
        ],
        image: heroImage
    }

    const solutionsSectionData = {
        title: 'We offer solutions for your business',
        list: ['Financial Modelling and Business Planning', 'Business and Asset Valuation', 'Mergers and Acquisitions (M&A)', 'Due Diligence', 'Risk management and internal control', 'Internal and Financial audit'],
        image: solutionsImg
    }

    const advantagesSectionData = {
        description: 'Financial consulting is a professional service offered by consultants in the field of finance and business management that has many advantages.',
        list: [
            'Expertise: Financial consulting provides clients with access to experts with extensive knowledge and experience in finance and business management. This enables clients to receive high-quality advice and make informed decisions.',
            'Improved efficiency: Financial consulting helps clients optimize their financial processes and manage risks, which can lead to improved financial efficiency, increased profits, and reduced costs.',
            'Independence: Financial consultants provide an independent opinion on a client’s business and financial condition, helping to obtain an objective assessment of the activity and identify areas for improvement.',
            'Strategy development: Financial consulting helps clients develop growth and investment strategies, conduct market and competitor analysis, identify potential growth opportunities, and develop plans for their implementation.',
        ]
    }

    return (
        <div className="container">
            <CommonHero
                data={heroSectionData}
            />
            <FinancialServices />
            <CommonSolutions
                data={solutionsSectionData}
            />
            <Reputation />
            <CommonAdvantages
                data={advantagesSectionData}
            />
            <Consultation />
            <Social />
        </div>
    )
}

export default FinancialConsultingPage