import CommonHero from '../components/CommonHero/CommonHero'
import AccountingServices from '../scenes/AccountingServices/AccountingServices'
import CommonSolutions from '../components/CommonSolutions/CommonSolutions'
import CloseTasks from '../scenes/CloseTasks/CloseTasks'
import Advantages from '../scenes/Advantages/Advantages'
import Consultation from '../scenes/Consultation/Consultation'
import Social from '../scenes/Social/Social'
import heroImage from '../assets/acc-services-hero.png'
import solutionsImg from '../assets/solutions.png'

const AccountingServicesPage = () => {
    const heroSectionData = {
        title: 'Accounting services',
        text: [
            'We will provide your business with full support in accordance with the requirements of the UAE legislation.',
            'Our experts will provide tax registration, high-quality accounting, preparation and submission of tax returns, help in passing an audit and analyze taxes according to settlement schemes and commercial transactions.'
        ],
        image: heroImage
    }

    const solutionsSectionData = {
        title: 'We offer solutions for your business',
        list: ['Managing full company’s accounting', 'Partial accounting with “VAT”, “wage expenses” etc', 'Accounting outsourcing', 'Financial statement analysis, interpretation, and evaluation', 'Advising on emerging tax issues', 'Assistance in resolving business disputes'],
        image: solutionsImg
    }

    return (
        <div className="container">
            <CommonHero
                data={heroSectionData}
            />
            <AccountingServices />
            <CommonSolutions
                data={solutionsSectionData}
            />
            <CloseTasks />
            <Advantages />
            <Consultation />
            <Social />
        </div>
    )
}

export default AccountingServicesPage