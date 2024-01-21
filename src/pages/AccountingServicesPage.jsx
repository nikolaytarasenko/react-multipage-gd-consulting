import CommonHero from '../components/CommonHero/CommonHero'
import AccountingServices from '../scenes/AccountingServices/AccountingServices'
import Solutions from '../scenes/Solutions/Solutions'
import CloseTasks from '../scenes/CloseTasks/CloseTasks'
import Advantages from '../scenes/Advantages/Advantages'
import Consultation from '../scenes/Consultation/Consultation'
import Social from '../scenes/Social/Social'
import heroImage from '../assets/acc-services-hero.png'

const AccountingServicesPage = () => {
    const heroSectionData = {
        title: 'Accounting services',
        text: [
            'We will provide your business with full support in accordance with the requirements of the UAE legislation.',
            'Our experts will provide tax registration, high-quality accounting, preparation and submission of tax returns, help in passing an audit and analyze taxes according to settlement schemes and commercial transactions.'
        ],
        image: heroImage
    }

    return (
        <div className="container">
            <CommonHero
                data={heroSectionData}
            />
            <AccountingServices />
            <Solutions />
            <CloseTasks />
            <Advantages />
            <Consultation />
            <Social />
        </div>
    )
}

export default AccountingServicesPage