import HomeHero from '../scenes/HomeHero/HomeHero'
import WhatWeDo from '../scenes/WhatWeDo/WhatWeDo'
import Apart from '../scenes/Apart/Apart'

const HomePage = () => {
    return (
        <>
            <div className="container">
                <HomeHero />
            </div>
            <WhatWeDo />
            <div className="container">
                <Apart />
            </div>
        </>
    )
}

export default HomePage