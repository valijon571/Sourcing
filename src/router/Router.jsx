import { Route, Routes } from "react-router-dom";
import Sourcing from "../sourcing/Sourcing";
import Publkatsya from "../sourcing/Publkatsya";
import Biblioteka from "../sourcing/Biblioteka";

const Router = () => {
    return(<>
    <Routes>
        <Route path="/" element={<Sourcing/>} />
        <Route path="/publkatsya" element={<Publkatsya/>} />
        <Route path="/library" element={<Biblioteka/>} />
    </Routes>
    </>)
}
export default Router;