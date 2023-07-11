import Head from "next/head";
import Navigation from "./navigation";

export default function Container(props) {
    return (
        <div>
            <Head>
                <title>Next.js Project</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.0/flatly/bootstrap.min.css"
                />
            </Head>
            <Navigation />
            <div className="container">{props.children}</div>
        </div>
    );
}
