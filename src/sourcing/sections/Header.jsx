import { Link } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div className="header">
          <div className="header_on">
            <Link to="/">
              <img src="/image/layer.png" />
            </Link>
            <Link to="/library" className="bibl">
              Библиотека
            </Link>
            <button>Помощь</button>
          </div>
          <div className="header_tu">
            <select>
              <option value={"Ru"}>Русский</option>
              <option value={"Eng"}>Eng</option>
              <option value={"Uz"}>Uzb</option>
            </select>

            <button>
              <img src="/image/walletmoney.png" />
              Подключить кошелек
            </button>

            <a href="#menu" class="menu-hamburger">
              <span class="hamburger"></span>
              <span class="hamburger"></span>
              <span class="hamburger"></span>
            </a>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
