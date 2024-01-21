import CommonHero from '../components/CommonHero/CommonHero'
import AccountingServices from '../scenes/AccountingServices/AccountingServices'
import CommonSolutions from '../components/CommonSolutions/CommonSolutions'
import CloseTasks from '../scenes/CloseTasks/CloseTasks'
import CommonAdvantages from '../components/CommonAdvantages/CommonAdvantages'
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

    const advantagesSectionData = {
        description: 'Conducting accounting services in our company has a number of significant advantages, especially if your business does not belong to the large category.',
        list: [
            'The payment for accounting services is significantly less than the salary of a qualified accountant',
            'G&D Consulting will be responsible for organizing accounting, searching for personnel for accounting, and other related tasks',
            'G&D Consulting specialists are highly qualified in accounting & bookeeping',
            'In addition to accounting support, you can count on qualified legal assistance in G&D Consulting',
        ]
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
            <CommonAdvantages
                data={advantagesSectionData}
            />
            <Consultation />
            <Social />
        </div>
    )
}

export default AccountingServicesPage