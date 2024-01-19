import styles from './HomeServices.module.css'
import img1 from '../../assets/home-services-1.png'
import img2 from '../../assets/home-services-2.png'
import img3 from '../../assets/home-services-3.png'
import Button from '../../components/Button/Button'
import { IoIosArrowRoundForward } from 'react-icons/io'

const HomeServices = () => {
    return (
        <div className="section">
            <h2 className={`section-title ${styles.title}`}>Services we provide</h2>
            <div className={styles.row}>
                <div className={styles.imgWrapper}>
                    <img src={img1} alt="Accounting Services" />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.name}>Accounting Services</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>Managing full company’s accounting</li>
                        <li className={styles.item}>Partial accounting with “VAT”, “wage expenses” etc.</li>
                        <li className={styles.item}>Accounting outsourcing</li>
                        <li className={styles.item}>Financial statement analysis, interpretation, and evaluation</li>
                        <li className={styles.item}>Advising on emerging tax issues</li>
                        <li className={styles.item}>Assistance in resolving business disputes</li>
                    </ul>
                    <Button style="transparent" type="link" link="/accounting-services">
                        More info
                        <IoIosArrowRoundForward size={30} />
                    </Button>
                </div>
            </div>
            <div className={styles.rowReverse}>
                <div className={styles.imgWrapper}>
                    <img src={img2} alt="Tax Consulting" />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.name}>Tax Consulting</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>VAT Registration, Filing, Amendment, Audit</li>
                        <li className={styles.item}>VAT Accounting & Consultancy</li>
                        <li className={styles.item}>Filing reconsideration form for VAT penalties</li>
                        <li className={styles.item}>Guidance with Tax Invoice</li>
                        <li className={styles.item}>Excise Tax Registration & Services</li>
                        <li className={styles.item}>Corporate tax consultancy</li>
                    </ul>
                    <Button style="transparent" type="link" link="/tax-consulting">
                        More info
                        <IoIosArrowRoundForward size={30} />
                    </Button>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imgWrapper}>
                    <img src={img3} alt="Financial Consulting" />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.name}>Financial Consulting</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>Financial Modelling and Business Planning</li>
                        <li className={styles.item}>Business and Asset Valuation</li>
                        <li className={styles.item}>Mergers and Acquisitions (M&A)</li>
                        <li className={styles.item}>Due Diligence</li>
                        <li className={styles.item}>Risk management and internal control</li>
                        <li className={styles.item}>Internal & External audit</li>
                    </ul>
                    <Button style="transparent" type="link" link="/financial-consulting">
                        More info
                        <IoIosArrowRoundForward size={30} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeServices