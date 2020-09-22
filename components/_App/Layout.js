import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>Jupiter - React Next eCommerce Template</title>
                <meta name="description" content="Jupiter - React Next eCommerce Template. This has been built with React, Next.js, Express.js, and ES6+" />
            </Head>
            {loader ? 'Loading' : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;