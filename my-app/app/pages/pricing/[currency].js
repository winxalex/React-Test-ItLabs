import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import Layout from '../components/Layout';
import CardGroup from '../components/CardGroup';
import Card from '../components/card';
import plansConfig from "./plans.config.json";
import { useState } from 'react';



const Plans = ({ plans }) => {


    const router = useRouter()
    const [state, SetState] = useState({})
    const { currency } = router.query;

    console.log(plansConfig);

    const handleCurrencyChange = (e) => {
        e.preventDefault();
        router.push("/pricing/" + e.target.value);
    }


    const handlePeriodChange = (e) => {

    }


    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    function plansToLeftBadge({ Pricing }) {
        console.log(Pricing);
    }
    function plansToLeftBadge({ Pricing }) {
        console.log(Pricing);
    }
    function plansToTitle({ Pricing }) {
        console.log(Pricing);
    }

    function plansToOptions({ MaxDomains, MaxAddresses, MaxSpace, MaxMembers }) {
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



        return options;
    }


    return (
        <div>
            <Layout>
                <div style={{ float: "right" }}>
                    <select onChange={handlePeriodChange}>
                        <option>Monthly</option>
                        <option>Annually</option>
                        <option>2 years</option>
                    </select>

                    <select onChange={handleCurrencyChange}>
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
                                titleLeftBadge={plansToLeftBadge(plan)}
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