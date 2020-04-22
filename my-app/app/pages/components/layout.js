import styles from './layout.module.css'
//import styles1 from './layout.module.css'


// function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>
// }

function Layout({ children }) {

    //console.log(styles);

    return (

        <div className={styles["card-group"]}>

            <div className={styles.card}>

                <div className={styles["card-body"]}>
                    <h4 className={`${styles["card-title"]} ${styles["text-center"]}`} style={{ color: "green" }}>MOST POPULAR</h4>
                    <h3 className={`${styles["card-title"]} ${styles["text-center"]} ${styles["text-uppercase"]} ${styles["font-weight-bold"]}`}>PROffESIONAL</h3>
                    <div className={`${styles["text-center"]}`}>
                        <span style={{ fontSize: 12 }}>&#36; &euro;&#67;&#72;&#70;</span>&nbsp;
                        <span style={{ fontSize: 40 }}>45</span>
                        <span>&#47;mo</span>
                    </div>
                    <h5 className={`${styles["card-text"]} ${styles["text-center"]}`}>Billed as $288 per year</h5>

                </div>
                <br />
                <p className={`${styles["card-text"]} ${styles["text-center"]}`}>With supporting text below as a natural lead-in to additional content.</p>
                <ui className={styles.cardList}>

                    <li className={styles.cardListItem}>
                        <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
                        </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>
                    <li className={styles.cardListItem}>
                        <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
                        </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>


                </ui>
                <br />
                <br />
                <div className={`${styles["text-center"]}`}>
                    <a href="#" className={`${styles.btn} ${styles["btn-primary"]} ${styles["text-center"]}`}>Select</a>
                </div>
            </div>


            <div className={styles.card}>
                <div className={styles["card-body"]}>
                    <h5 className={styles["card-title"]}>Special title treatment</h5>
                    <p className={styles["card-text"]}>With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>Go somewhere</a>
                </div>
            </div>




        </div>
    )
}

export default Layout
