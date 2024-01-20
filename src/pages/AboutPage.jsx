import AboutHero from '../scenes/AboutHero/AboutHero'
import Trusted from '../scenes/Trusted/Trusted'
import Consultation from '../scenes/Consultation/Consultation'

const AboutPage = () => {
    return (
        <>
            <div className="container">
                <AboutHero />
                <Trusted />
                <Consultation />
            </div>
        </>
    )
}

export default AboutPage