import { SourcingStyle } from "./SourcingStyle";
import Banner from "./sections/Banner";
import Header from "./sections/Header";
import Body from "./sections/Body";
import Card from "./sections/Card";
import Faq from "./sections/Faq";
import Nav from "./sections/Nav";
import Info from "./sections/Info";
import Footer from "./sections/Footer";

const Sourcing = () => {
  return (
    <>
      <SourcingStyle>
        <body>
          <div className="contenr">
            <Header />
            <Banner />
            <Body />
            <hr />
            <Card />
            <hr />
            <Faq />
            <hr />
            <Nav />
            <h2 className="nav_info_card">Полезная информация</h2>
            <Info />
            <hr />
            <Footer />
          </div>
        </body>
      </SourcingStyle>
    </>
  );
};

export default Sourcing;
