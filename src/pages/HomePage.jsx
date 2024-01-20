import HomeHero from '../scenes/HomeHero/HomeHero'
import WhatWeDo from '../scenes/WhatWeDo/WhatWeDo'
import Apart from '../scenes/Apart/Apart'
import HomeServices from '../scenes/HomeServices/HomeServices'
import Experience from '../scenes/Experience/Experience'
import Principles from '../scenes/Principles/Principles'
import Decor from '../scenes/Decor/Decor'
import Clients from '../scenes/Clients/Clients'
import WorkTogether from '../scenes/WorkTogether/WorkTogether'
import Social from '../scenes/Social/Social'

const HomePage = () => {
    return (
        <>
            <div className="container">
                <HomeHero />
            </div>
            <WhatWeDo />
            <div className="container">
                <Apart />
                <HomeServices />
                <Experience />
                <Principles />
            </div>
            <Decor />
            <div className="container">
                <Clients />
                <WorkTogether />
            </div>
            <Decor />
            <div className="container">
                <Social />
            </div>
        </>
    )
}

export default HomePage