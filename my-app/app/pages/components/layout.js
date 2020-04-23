import styles from './layout.module.css'
import { useRouter } from 'next/router';

//import styles1 from './layout.module.css'


// function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>
// }

function Layout({ children }) {

    //console.log(styles);

    const router = useRouter()


    const handleCurrencyChange = (e) => {
        router.push("/posts/" + e.target.value);
    }


    const handlePeriodChange = (e) => {

    }


    return (
        <div>{children}</div>
        //     <div>
        //         <div style={{ float: "right" }}>
        //             <select onChange={handlePeriodChange}>
        //                 <option>Monthly</option>
        //                 <option>Annually</option>
        //                 <option>2 years</option>
        //             </select>

        //             <select onChange={handleCurrencyChange}>
        //                 <option>EUR</option>
        //                 <option>USD</option>
        //                 <option>CHF</option>
        //             </select>
        //         </div>
        //         <br />
        //         <div className={styles["card-group"]}>

        //             <div className={styles.card} style={{ minWidth: 200, maxWidth: 400 }} >

        //                 <div className={styles["card-body"]}>
        //                     <h4 className={`${styles["card-title"]} text-center`} style={{ color: "green" }}>MOST POPULAR</h4>
        //                     <h3 className={`${styles["card-title"]} text-center text-uppercase font-weight-bold`}>PROffESIONAL</h3>
        //                     <div className={`text-center`}>
        //                         <span style={{ fontSize: 12 }}>&#36; &euro;&#67;&#72;&#70;</span>&nbsp;
        //                     <span style={{ fontSize: 40 }}>45</span>
        //                         <span>&#47;mo</span>
        //                     </div>
        //                     <h5 className={`${styles["card-text"]} text-center`}>Billed as $288 per year</h5>

        //                 </div>
        //                 <br />
        //                 <p className={`${styles["card-text"]} text-center`}>With supporting text below as a natural lead-in to additional content.</p>
        //                 <ul className={styles.cardList}>

        //                     <li className={styles.cardListItem}>
        //                         <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                             <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
        //                             <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
        //                         </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>
        //                     <li className={styles.cardListItem}>
        //                         <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                             <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
        //                             <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
        //                         </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>


        //                 </ul>
        //                 <br />
        //                 <br />
        //                 <div className={`text-center`}>
        //                     <a href="#" className={`${styles.btn} ${styles["btn-primary"]} text-center`}>Select</a>
        //                 </div>
        //             </div>


        //             <div className={styles.card} style={{ minWidth: 200, maxWidth: 400 }}>

        //                 <div className={styles["card-body"]}>
        //                     <h4 className={`${styles["card-title"]} text-center`} style={{ color: "green" }}>MOST POPULAR</h4>
        //                     <h3 className={`${styles["card-title"]} text-center text-uppercase font-weight-bold`}>PROffESIONAL</h3>
        //                     <div className={`text-center`}>
        //                         <span style={{ fontSize: 12 }}>&#36; &euro;&#67;&#72;&#70;</span>&nbsp;
        // <span style={{ fontSize: 40 }}>45</span>
        //                         <span>&#47;mo</span>
        //                     </div>
        //                     <h5 className={`${styles["card-text"]} text-center`}>Billed as $288 per year</h5>

        //                 </div>
        //                 <br />
        //                 <p className={`${styles["card-text"]} text-center`}>With supporting text below as a natural lead-in to additional content.</p>
        //                 <ul className={styles.cardList}>

        //                     <li className={styles.cardListItem}>
        //                         <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                             <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
        //                             <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
        //                         </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>
        //                     <li className={styles.cardListItem}>
        //                         <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                             <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
        //                             <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
        //                         </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>
        //                     <li className={styles.cardListItem}>
        //                         <svg className={styles.cardListBullet} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                             <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
        //                             <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
        //                         </svg><span style={{ marginLeft: "5px" }} > Mile</span></li>

        //                 </ul>
        //                 <br />
        //                 <br />
        //                 <div className={`text-center`}>
        //                     <a href="#" className={`${styles.btn} ${styles["btn-primary"]} text-center`}>Select</a>
        //                 </div>
        //             </div>




        //         </div>
        //     </div>
    )
}

export default Layout
