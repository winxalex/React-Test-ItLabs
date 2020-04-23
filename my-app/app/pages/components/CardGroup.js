import styles from './card.module.css'


export default function CardGroup({ children }) {
    return (
        <div className={styles["card-group"]}>
            {children}
        </div>
    )
};