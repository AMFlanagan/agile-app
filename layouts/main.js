import Head from 'next/head';
import NavBar from '../src/components/NavBar';
export default ({ children, page }) => (
    <main>
        <Head>
            <title>Garys magical fucking app</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        </Head>
            <NavBar page={page}/>
        <div className="container-fluid">
            {children}
        </div>
    </main>
)