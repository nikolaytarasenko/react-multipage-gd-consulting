import CommonHero from '../components/CommonHero/CommonHero'
import TaxServices from '../scenes/TaxServices/TaxServices'
import CommonSolutions from '../components/CommonSolutions/CommonSolutions'
import ReliableConsulting from '../scenes/ReliableConsulting/ReliableConsulting'
import CommonAdvantages from '../components/CommonAdvantages/CommonAdvantages'
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

    const advantagesSectionData = {
        description: 'Tax consulting is a professional service offered by consultants in the field of taxation to optimize tax payments and minimize tax risks. Our tax consultants help clients in the following ways:',
        list: [
            'Reducing tax risks: Our professional tax consultants help clients evaluate and organize their tax payments correctly to avoid possible tax risks and penalties for non-compliance with tax rules.',
            'Minimizing tax obligations: We assist clients in minimizing their tax obligations by using legal tax benefits and discounts that may be available for certain types of activities and/or individual taxpayers.',
            'Saving time and resources: Our tax consulting services help clients reduce the time and resources spent on preparing and submitting tax returns and accounting for tax payments. This allows them to focus on their core activities and business development.',
            'Offering professional knowledge and experience: Our tax consultants have a wealth of experience and knowledge in tax law and taxation, which allows us to provide clients with high-quality tax advice and assistance in resolving complex tax issues.',
        ]
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
            <CommonAdvantages
                data={advantagesSectionData}
            />
            <Consultation />
            <Social />
        </div>
    )
}

export default TaxConsultingPage