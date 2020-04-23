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


const Plans = ({ plans }) => {


    const router = useRouter()
    const { currency } = router.query;

    const [state, setState] = useState({ cycle: "1", currency: currency })


    // console.log(plansConfig);

    const handleCurrencyChange = (e) => {
        e.preventDefault();

        setState({ ...state, currency: e.target.value });
        router.push("/pricing/" + e.target.value);
    }


    const handleCycleChange = (e) => {

        const selection = e.target.value;
        let cycle = "1";

        if (selection === "Anually") {
            cycle = "12";
        } else if (selection === "2 years") {
            cycle = "24";
        }

        setState({ ...state, cycle });
    }


    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    function plansToLeftBadge() {
        return currencyConfig[state.currency].sign;
    }
    function plansToRightBadge({ Pricing }) {
        return "/mo";
    }
    function plansToTitle({ Pricing }) {
        return Pricing["1"] * 0.01;
    }
    function plansToTitleDescription({ Pricing }) {
        const { cycle } = state;

        if (cycle === "12") {
            return `Billed ${Pricing[cycle] * 0.01} per year`;
        } else if (cycle === "24") {
            return `Billed ${Pricing[cycle] * 0.01} per 2 years`;
        }

        return "Billed per month";
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
                <div style={{ float: "right" }}>
                    <select onChange={handleCycleChange}>
                        <option>Monthly</option>
                        <option>Annually</option>
                        <option>2 years</option>
                    </select>

                    <select value={state.currency} onChange={handleCurrencyChange}>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>CHF</option>
                    </select>
                </div>
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
                                isPopular={plansToLeftBadge(plan)}
                                options={plansToOptions(plan)}></Card>

                        )
                    }

                </CardGroup>
            </Layout>

        </div>
    )
}



export async function getStaticPaths() {
    // Return a list of possible value for currency

    return {
        paths: [

            { params: { currency: 'EUR' } },
            { params: { currency: 'USD' } },
            { params: { currency: 'CHF' } }
        ],
        fallback: false
    }

}




//Currencies available in the selector: EUR, CHF and USD.
export async function getStaticProps({ params }) {


    const res = await fetch(`https://api.protonmail.ch/payments/plans?${params.currency}`, myInit)

    const json = await res.json();
    //return { stars: json.stargazers_count }
    console.log(json);
    // return { props: { stars: json.Plans[0].Name } }
    //return { props: { stars: JSON.stringify(json) } }
    return { props: { plans: json.Plans } }
    //return { props: { stars: params.i } }
};

export default Plans