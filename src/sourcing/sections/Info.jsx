import Info_on from "./Info_on";
const Info = () => {
  const prep = [
    {
      className: "info_card_on",
      img: "/image/icon.svg",
      name: "Расширенный поиск",
      teks: "Быстрый поиск ресурсов по<br/> категории, названию или автору",
      describe: "Найти статью",
      image: "/image/group.png",
    },
    {
      className: "info_card_to",
      img: "/image/icon_on.svg",
      name: "Полезно для читателей",
      teks: "Децентрализованный журнал с <br/>более чем 1,500 ресурсов",
      describe: "Посмотреть библиотеку",
      image: "/image/group.png",
    },
    {
      className: "info_card_sri",
      img: "/image/icon_to.svg",
      name: "Вы автор или ученый?",
      teks: "Узнайте больше о публикации <br/>научных ресурсов",
      describe: "Стать автором",
      image: "/image/group.png",
    },
  ];
  return (
    <>
      <div className="info_card">
        {prep.map((item, index) => (
          <Info_on
            key={index}
            className={item.className}
            img={item.img}
            name={item.name}
            teks={item.teks}
            describe={item.describe}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default Info;
