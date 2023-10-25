import { BibliStyle } from "./BibliStyle";

const Bibli = () => {
  return (
    <>
      <BibliStyle>
        <pre>Главная > Библиотека</pre>
        <h2>Библиотека ресурсов</h2>
        <div className="imy">
          <img src="/image/magnifer.svg" />
          <input
            type="text"
            placeholder="Введите название статьи или имя автора"
          ></input>
        </div>
        <div className="link">
          <select>
            <option value={"Ru"}>Все категории</option>
            <option value={"Eng"}>Все категории</option>
            <option value={"Uz"}>Все категории</option>
          </select>
          <select>
            <option value={"Ru"}>Русский</option>
            <option value={"Eng"}>Eng</option>
            <option value={"Uz"}>Uzb</option>
          </select>
          <select>
            <option value={"Ru"}>до 2023 года</option>
            <option value={"Eng"}>до 2023 года</option>
            <option value={"Uz"}>до 2023 года</option>
          </select>
        </div>
      </BibliStyle>
    </>
  );
};
export default Bibli;
