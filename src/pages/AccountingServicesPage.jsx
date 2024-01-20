import CommonHero from '../components/CommonHero/CommonHero'
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
        </div>
    )
}

export default AccountingServicesPage