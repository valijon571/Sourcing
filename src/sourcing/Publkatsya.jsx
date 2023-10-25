import { SourcingStyle } from "./SourcingStyle";
import Header from "./sections/Header";
import Card_to from "./sections/Card_to";
import Footer from "./sections/Footer";
import Publi_body from "./sections/Publi_body";

const Publkatsya = () => {
    return(<>
    <SourcingStyle  >
        <body>
            <div className="contenr">
            <Header/>
            <Publi_body/>  
            <Card_to/>
            <hr/>
            <Footer/>
            </div>
        </body>
    
    </SourcingStyle>
    </>)
}
export default Publkatsya;