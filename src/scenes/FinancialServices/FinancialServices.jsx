import styles from './FinancialServices.module.css'

const FinancialServices = () => {
    return (
        <div className="section">
            <div className={styles.row}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Financial Planning and Analysis</h2>
                        <p className={styles.cardText}>Creating financial plans and budgets for managing a company’s finances.</p>
                        <p className={styles.cardText}>Analyzing financial statements, identifying problem areas, and developing recommendations to improve financial performance.</p>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Financial Management and Investment</h2>
                        <p className={styles.cardText}>Managing a company's cash flows and investment portfolios.</p>
                        <p className={styles.cardText}>Assisting in the selection and evaluation of investment projects and financial instruments to achieve a company's financial goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialServices