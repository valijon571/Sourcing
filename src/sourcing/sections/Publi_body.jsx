import { PublkStyle } from "./PublkStyle";

const Publi_body = () => {
  return (
    <>
      <PublkStyle>
        <div className="publi_body">
          <pre>Главная > Библиотека > Детали статьи > Публикации автора</pre>
          <div className="paper">
            <div className="frame">
              <img src="/image/user_avatar.png" />
              <div className="itme">
                <h4>Лимарова Елена Васильевна</h4>
                <p>0x0DB823218e337a6817e6D7740eb17635DEAdafAF</p>
              </div>
            </div>
            <button>Подробнее</button>
          </div>
          <h2>Публикации автора</h2>
          <div className="set_of">
            <button className="tag">
              {" "}
              научное исследование <img src="/image/close-circle.png" />
            </button>
            <button className="tag">
              языки <img src="/image/close-circle.png" />
            </button>
            <button className="tag">
              интернет <img src="/image/close-circle.png" />
            </button>
            <button className="tag_on">немецкий язык</button>
            <button className="tag_on">русский язык</button>
          </div>
        </div>
      </PublkStyle>
    </>
  );
};
export default Publi_body;
