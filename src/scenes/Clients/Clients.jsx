import styles from './Clients.module.css'
import clientsImg from '../../assets/clients-img.png'

const Clients = () => {
    return (
        <div className="section">
            <div className={styles.inner}>
                <div className={styles.heading}>
                    <h2 className={`section-title ${styles.title}`}>100+ Satisfied Clients</h2>
                    <img src={clientsImg} alt="Clients" className={styles.img} />
                </div>
                <p className={styles.text}>At G&D Consulting, we have successfully helped numerous clients in overcoming financial, tax, and accounting challenges. With a growing base of over 100 satisfied clients, our team of experts is well-equipped with the essential knowledge and expertise to prevent errors, ensure compliance, and capitalize on opportunities that others might overlook. By efficiently managing time-consuming tasks, we enable our clients to focus on their core business objectives and personal endeavors.</p>
                <p className={styles.text}>Our commitment to cost-effectiveness and security has earned us the trust of a wide range of clients. We provide top-notch services without compromising on quality or the safeguarding of your confidential information. Our transparent and prompt communication guarantees clients remain well-informed and supported throughout our collaboration.</p>
            </div>
        </div>
    )
}

export default Clients