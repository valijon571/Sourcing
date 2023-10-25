const Body_on = ({img, name,  describe, className }) =>{
    return (<>
        <div className={className}>
            <img src={img}/>
            <div>{name}</div>
            {/* <h6>Автор</h6> */}
            <p>{ describe}</p>
        </div>
    </>)
}
export default Body_on;