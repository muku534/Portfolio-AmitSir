import "@/styles/globals.css";
import "@/styles/nav.css"

import Nav from "@/components/Nav";
import Footer from "@/app/Footer/page";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Portfolio",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        {/* <Footer /> */}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
