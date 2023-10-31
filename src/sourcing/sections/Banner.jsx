const Banner = () => {
  return (
    <>
      <div className="body">
        <h1>Децентрализованный журнал </h1>
        <p>
          Журнал для поиска и публикации научных ресурсов, статей, исследований
          и книг. <br />
          Введите свой запрос в поиске ниже.
        </p>
        <div className="body_pls">
          <img src="/image/magnifer.svg" />
          <input
            type="text"
            placeholder="Введите название статьи или имя автора"
          ></input>
        </div>
        <div className="body_botton">
          <select name="" id="">
            <option>Все категории</option>
          </select>

          <select name="" id="">
            <option>Все языки</option>
          </select>

          <select name="" id="">
            <option>до 2023 года</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default Banner;
