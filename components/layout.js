import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Head>
          {/* <script
            async
            defer
            data-domain="nickflynn.dev"
            src="https://plausible.io/js/plausible.js"
          ></script> */}
        </Head>
      </div>
      {/* <div className="max-w-screen-md px-8 mx-auto"> */}
      <div className="">
        <Header></Header>
        <div>{children}</div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
