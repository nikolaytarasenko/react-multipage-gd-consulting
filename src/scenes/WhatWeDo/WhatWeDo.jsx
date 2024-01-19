import styles from './WhatWeDo.module.css'
import Button from '../../components/Button/Button'
import decor1 from '../../assets/what-we-do-decor-1.png'
import decor2 from '../../assets/what-we-do-decor-2.png'
import decor3 from '../../assets/what-we-do-decor-3.png'

const WhatWeDo = () => {
    return (
        <div className={`section ${styles.whatWeDo}`}>
            <img src={decor1} alt="decor" className={styles.decor1} />
            <img src={decor2} alt="decor" className={styles.decor2} />
            <img src={decor3} alt="decor" className={styles.decor3} />
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>What we do</h2>
                        <p className={styles.description}>We provide accounting services, tax consultancy and financial solutions to help you stay ahead of the game from all key sectors of the economy.</p>
                        <p className={styles.description}>Relying on our unrivalled multi-year experience, you will be able to discover new ways of development and find winning opportunities.</p>
                        <Button style="transparent" type="link" link="/about">
                            More about us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo