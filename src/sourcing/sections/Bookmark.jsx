import { Link } from "react-router-dom";
const Bookmark = ({ name, date, author, description, price, words, img }) => {
  return (
    <>
      <div className="main_card">
        <div className="card_on">
          <div className="bookmark">
            <img src={img} />
          </div>
          <div className="pre">
            <img src="/image/group.png" />
            <pre>{date}</pre>
          </div>
          <h6>{name}</h6>
          <Link to="/publkatsya">{author}</Link>
          <p>{description}</p>
          <div className="button">
            {words.map((item, index) => (
              <button className="button_on" key={index}>
                {item}
              </button>
            ))}
          </div>
          <div className="price">
            <h6>{price}</h6>
            <p>sow</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bookmark;
