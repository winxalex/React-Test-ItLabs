import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import Layout from '../components/Layout';
import CardGroup from '../components/CardGroup';
import Card from '../components/card';

const Plans = ({ stars }) => {
    const router = useRouter()
    const { currency } = router.query;
    console.log(router.query);


    return (
        <div>
            <Layout>
                <CardGroup>
                    <Card></Card>
                </CardGroup>
            </Layout>
            <p>Post: {currency} {stars}</p>
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
    return { props: { stars: JSON.stringify(json) } }
    //return { props: { stars: params.i } }
};

export default Plans