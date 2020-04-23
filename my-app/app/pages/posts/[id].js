import { useRouter } from 'next/router'
import fetch from 'node-fetch'

const Post = ({ stars }) => {
    const router = useRouter()
    const { id } = router.query;
    console.log(router.query);
    return <p>Post: {id} {stars}</p>
}



export async function getStaticPaths() {
    // Return a list of possible value for id

    return {
        paths: [
            { params: { id: 'EUR' } },
            { params: { id: 'USD' } },
            { params: { id: 'CHF' } }
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

    const res = await fetch(`https://api.protonmail.ch/payments/plans?${params.id}`, myInit)

    const json = await res.json();
    //return { stars: json.stargazers_count }
    console.log(json);
    // return { props: { stars: json.Plans[0].Name } }
    return { props: { stars: JSON.stringify(json) } }
    //return { props: { stars: params.i } }
};

export default Post
