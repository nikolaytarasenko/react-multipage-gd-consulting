import styles from './CommonAdvantages.module.css'

const CommonAdvantages = ({ data: { description, list } }) => {
    return (
        <div className="section">
            <div className={styles.list}>
                <div className={styles.item}>
                    <h2 className={styles.title}>Advantages</h2>
                    <p className={styles.text}>{description}</p>
                </div>
                {list.map((item, i) => (
                    <div className={styles.item} key={i}>
                        <p className={styles.text}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommonAdvantages