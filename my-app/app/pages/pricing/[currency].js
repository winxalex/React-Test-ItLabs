import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import Layout from '../components/Layout';
import CardGroup from '../components/CardGroup';
import Card from '../components/card';
import plansConfig from "./plans.config.json";
import currencyConfig from "./currency.config.json";
import { useState } from 'react';


const myHeaders = {

    'Content-Type': 'application/json;charset=utf-8',
    'x-pm-appversion': 'Other',
    'x-pm-apiversion': '3',
    'Accept': 'application/vnd.protonmail.v1+json'
}

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

const MONTH = "1";
const YEAR = "12";
const YEARS_2 = "24";
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

const Plans = ({ plans }) => {


    const router = useRouter()
    const { currency } = router.query;

    const [state, setState] = useState({ cycle: "1", currency: currency })

    //filter only plans defined in config + free (I coudn't find in api call)
    plans = plans.filter(el => Object.keys(plansConfig).includes(el.Name));
    plans.unshift(plansConfig.free);



    const handleCurrencyChange = (e) => {
        e.preventDefault();


        setState({ ...state, currency: e.target.value });

        //!!! Pricing is the same for all currencies
        //if that is what intented this line can be commeted
        router.push("/pricing/" + e.target.value);

    }


    const handleCycleChange = (e) => {

        const selection = e.target.value;
        let cycle = MONTH;

        if (selection === "Annually") {
            cycle = YEAR;
        } else if (selection === "2 years") {
            cycle = YEARS_2;
        }

        setState({ ...state, cycle });
    }


    function bytesToSize(bytes) {

        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    function plansToLeftBadge() {

        return currencyConfig[state.currency].sign;
    }
    function plansToRightBadge({ Pricing }) {
        if (Pricing)
            return "/mo";
    }
    function plansToTitle({ Pricing, Currency }) {

        if (Pricing) {

            return Pricing[MONTH] * 0.01;
        }
        return 0;
    }
    function plansToTitleDescription({ Pricing }) {

        if (Pricing) {

            const { cycle } = state;

            if (cycle === YEAR) {
                return `Billed ${plansToLeftBadge()} ${Pricing[cycle] * 0.01} per year`;
            } else if (cycle === YEARS_2) {
                return `Billed ${plansToLeftBadge()} ${Pricing[cycle] * 0.01} per 2 years`;
            }

            return "Billed per month";
        }
    }
    function plansToText({ Name }) {
        if (plansConfig[Name])
            return plansConfig[Name].Text;
    }

    function plansToOptions({ MaxDomains, MaxAddresses, MaxSpace, MaxMembers, Name }) {
        const options = [];

        if (MaxMembers > 0) {
            options.push(`${MaxMembers} user`);
        }

        if (MaxSpace > 0) {
            options.push(`${bytesToSize(MaxSpace)} *`);
        }

        if (MaxAddresses > 0) {
            options.push(`${MaxAddresses} addresses *`);
        }

        if (MaxDomains > 0) {
            options.push(`Supports ${MaxDomains} domain *`);
        } else {
            options.push(`No domain support`);
        }

        if (plansConfig[Name])
            return options.concat(plansConfig[Name].options);

        return options;
    }


    return (
        <div>

            <Layout>

                <div className="col-100" >
                    <select onChange={handleCycleChange}>
                        <option>Monthly</option>
                        <option>Annually</option>
                        <option>2 years</option>
                    </select>

                    <select styles={{ width: "150px" }} value={state.currency} onChange={handleCurrencyChange}>
                        {
                            Object.keys(currencyConfig).map((el, i) =>
                                <option key={i}>{el}</option>
                            )
                        }

                    </select></div>

                <div className="w-100"></div>
                <div className="col-100">
                    <CardGroup>
                        {

                            plans.map((plan, index) =>

                                <Card key={index}
                                    title={plansToTitle(plan)}
                                    subtitle={plan.Name}
                                    titleRightBadge={plansToRightBadge(plan)}
                                    titleLeftBadge={plansToLeftBadge(plan)}
                                    titleDescription={plansToTitleDescription(plan)}
                                    text={plansToText(plan)}
                                    isPopular={plansConfig[plan.Name] && plansConfig[plan.Name].isPopular}
                                    options={plansToOptions(plan)}></Card>

                            )
                        }

                    </CardGroup>
                </div>




            </Layout>

        </div>
    )
}


//v1 STATIC (created at build time)
export async function getStaticPaths() {
    // Return a list of possible value for currency

    const paths = [];

    Object.keys(currencyConfig).forEach(element => {
        paths.push({ params: { currency: element } })
    });

    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps({ params }) {

    // console.log("request " + params.currency);


    const res = await fetch(`https://api.protonmail.ch/payments/plans?Currency=${params.currency}`, myInit)

    const json = await res.json();

    //console.log(json);

    return { props: { plans: json.Plans } }

};


//V2 SERVER RENDERED (page is rendered on server and sent to client)
// export async function getServerSideProps({ params }) {

//     console.log("request " + params.currency);


//     const res = await fetch(`https://api.protonmail.ch/payments/plans?Currency=${params.currency}`, myInit)

//     const json = await res.json();

//     //console.log(json);

//     return { props: { plans: json.Plans } }

// };

export default Plans