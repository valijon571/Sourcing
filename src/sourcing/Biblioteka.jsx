import { SourcingStyle } from "./SourcingStyle";
import Header from "./sections/Header";
import Bibli from "./sections/Bibli";
import Card_sri from "./sections/Card_sri";
import Footer from "./sections/Footer";

const Biblioteka = () => {
  return (
    <>
      <SourcingStyle>
        <body>
          <div className="contenr">
            <Header />
            <Bibli />
            <hr />
            <Card_sri />
            <hr />
            <Footer />
          </div>
        </body>
      </SourcingStyle>
    </>
  );
};
export default Biblioteka;
