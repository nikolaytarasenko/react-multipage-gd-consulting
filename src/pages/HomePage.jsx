import HomeHero from '../scenes/HomeHero/HomeHero'
import WhatWeDo from '../scenes/WhatWeDo/WhatWeDo'
import Apart from '../scenes/Apart/Apart'
import HomeServices from '../scenes/HomeServices/HomeServices'
import Experience from '../scenes/Experience/Experience'

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
            </div>
        </>
    )
}

export default HomePage