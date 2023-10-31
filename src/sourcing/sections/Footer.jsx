const Footer = () => {
  return (
    <>
      <div className="footer">
        <img className="foot_img" src="/image/layer.png" />
        <div>
          Библиотека
          <br />
          О нас
          <br />
          Контакты
        </div>
        <div>
          Стать автором
          <br />
          Стать валидатором
          <br />
          Политика конфиденциальности
        </div>
        <div className="foot_button">
          Есть вопросы?
          <button>
            {" "}
            <img src="/image/telegram 1.svg" />
            Телеграм бот
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
