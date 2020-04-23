import styles from './card.module.css'




export default function Card({ subtitle, titleLeftBadge, title, titleRightBadge, titleDescription, text, options, isPopular, onSelect }) {
    return (
        <div className={styles.card} style={{ minWidth: 200, maxWidth: 400 }} >

            <div className={styles["card-body"]}>

                {
                    isPopular ?
                        <h4 className={`${styles.cardPopularText} text-center`} >MOST POPULAR</h4>
                        :
                        <h4> &nbsp;</h4>
                }
                <h3 className={`${styles["card-subtitle"]} text-center text-uppercase font-weight-bold`}>{subtitle}</h3>
                <div className={`text-center`}>
                    <span className={styles.titleLeftBadge}>{titleLeftBadge}</span>&nbsp;
                        <span className={styles["card-title"]}>{title}</span>
                    <span className={styles.titleRightBadge}>{titleRightBadge}</span>
                </div>
                <h5 className={`styles.cardTitleDescripiton text-center`}>{titleDescription}</h5>

            </div>
            <br />
            <p className={`${styles["card-text"]} text-center`}>{text}</p>
            <ul className={styles.cardList}>

                {
                    options && options.map((el, i) =>

                        <li key={i} className={styles.cardListItem}>
                            <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd" />
                            </svg><span className={`styles.cardListItemText text-center`} > {el}</span></li>

                    )
                }



            </ul>
            <br />
            <br />
            <div className={`text-center`}>
                <a href="#" className={`${styles.btn} ${styles["btn-primary"]} text-center`} onClick={onSelect}>Select</a>
            </div>
            <br />
            <div>&nbsp;</div>
        </div>

    )
}