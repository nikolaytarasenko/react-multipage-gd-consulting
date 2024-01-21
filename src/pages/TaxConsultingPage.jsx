import CommonHero from '../components/CommonHero/CommonHero'
import TaxServices from '../scenes/TaxServices/TaxServices'
import CommonSolutions from '../components/CommonSolutions/CommonSolutions'
import ReliableConsulting from '../scenes/ReliableConsulting/ReliableConsulting'
import Advantages from '../scenes/Advantages/Advantages'
import Consultation from '../scenes/Consultation/Consultation'
import Social from '../scenes/Social/Social'
import heroImage from '../assets/tax-consulting-hero.png'
import solutionsImg from '../assets/tax-solutions.png'

const TaxConsultingPage = () => {
    const heroSectionData = {
        title: 'Tax Consulting',
        text: [
            'Many companies in the UAE face difficulties and misunderstandings of local tax laws, which lead to fines and more serious consequences. Knowing all the features of the UAE market is the key to your success.',
            'The experience and knowledge of G&D Consulting experts will ensure high-quality accounting and tax accounting.'
        ],
        image: heroImage
    }

    const solutionsSectionData = {
        title: 'We offer solutions for your business',
        list: ['VAT Registration, Filing, Amendment, Audit', 'VAT Accounting & Consultancy', 'Filing reconsideration form for VAT penalties', 'Guidance with Tax Invoice', 'Excise Tax Registration & Services', 'Corporate tax consultancy'],
        image: solutionsImg
    }

    return (
        <div className="container">
            <CommonHero
                data={heroSectionData}
            />
            <TaxServices />
            <CommonSolutions
                data={solutionsSectionData}
            />
            <ReliableConsulting />
            <Advantages />
            <Consultation />
            <Social />
        </div>
    )
}

export default TaxConsultingPage