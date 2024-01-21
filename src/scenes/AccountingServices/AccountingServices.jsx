import styles from './AccountingServices.module.css'

const AccountingServices = () => {
    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Business support in the UAE</h2>
                        <p className={styles.cardText}>Our team specializes in providing accounting and tax services in the UAE, providing financial advice tailored to your needs.</p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Combination of global and local experience</h2>
                        <p className={styles.cardText}>Combining international experience with deep knowledge of the local market, we provide our customers with exceptional service. We pride ourselves on being available, quickly and efficiently resolving customer issues and concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountingServices
