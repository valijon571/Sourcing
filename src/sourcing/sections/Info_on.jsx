const Info_on = ({ className, img, name, teks, describe, image }) => {
  return (
    <>
      <div className={className}>
        <img className="info_img" src={img} />
        <div className="info_div">
          <img src={image} />
          <div>{name}</div>
        </div>
        <p>{teks}</p>
        <u>{describe}</u>
      </div>
    </>
  );
};
export default Info_on;
