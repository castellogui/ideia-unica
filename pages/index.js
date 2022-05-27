import Link from "next/link";


function Home() {
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar página sobre</a>
        </Link>
        <br></br>
        <Link href="/api/cep">
            <a>Acessar página cep</a>
        </Link>
    </div>)
}

export default Home