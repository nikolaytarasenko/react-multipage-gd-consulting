import AboutHero from '../scenes/AboutHero/AboutHero'
import Trusted from '../scenes/Trusted/Trusted'
import Consultation from '../scenes/Consultation/Consultation'
import Social from '../scenes/Social/Social'

const AboutPage = () => {
    return (
        <>
            <div className="container">
                <AboutHero />
                <Trusted />
                <Consultation />
                <Social />
            </div>
        </>
    )
}

export default AboutPage