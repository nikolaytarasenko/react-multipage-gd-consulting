import styles from './TaxServices.module.css'

const TaxServices = () => {
    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <p className={styles.cardText}><strong>We are consulting on the new corporate tax in the UAE.</strong> Our team combines understanding of clients' business, innovative solutions and extensive professional and industry knowledge. This allows us to provide services of the highest quality, taking into account the specifics of each company.</p>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.cardText}><strong>We offer a wide range of consulting services in the field of taxation.</strong> Our experts will help with tax registration, high-quality bookkeeping, preparation and submission of tax returns, as well as in auditing and tax monitoring.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxServices