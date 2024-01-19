import HomeHero from '../scenes/HomeHero/HomeHero'
import WhatWeDo from '../scenes/WhatWeDo/WhatWeDo'
import Apart from '../scenes/Apart/Apart'
import HomeServices from '../scenes/HomeServices/HomeServices'

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
            </div>
        </>
    )
}

export default HomePage