import styles from './Button.module.css'

const Button = ({ style, children }) => {

    return (
        <button className={`${styles.button} ${styles[style]}`}>
            {children}
        </button>
    )
}

export default Button