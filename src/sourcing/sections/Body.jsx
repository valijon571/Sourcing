import Body_on from "./Body_on"
import { HeaderStyle } from "./HeaderStyle"
const Body = () =>{
    const pep = [
        {
            className: "body_to_on ",
            img: "/image/iconauthor.svg",
            name: 'Автор',
            describe: 'Владеет собственностью на свою работу <br/>(NFT), которая публикуется и приносит <br/>вознаграждение каждый раз, когда кто-то ее <br/>читает',
        },
        {
            className: "body_to_to",
            img:"/image/iconvalidator.svg",
            name: 'Валидатор ',
            describe: 'Проверяет представленные работы<br/> и получает вознаграждение за легитимные<br/> работы ',
        },
        {
            className:"body_to_sri",
            img:"/image/iconreader.svg",
            name: 'Читатель ',
            describe: 'Платит за разовую покупку статьи или <br/>пользуется подпиской, предоставляемой<br/> учреждениями ',
        }
    ]
    return(<>
        <div className="body_img">
            <img className="body_img_on"  src="/image/stamp.png"/>
        </div>
        
        <div className="body_on">
        <h2>Sea of Wisdom основан на движении <br/>за открытую науку, в котором <br/>заинтересованы ученые </h2>
        <div className="nasha">
            {/* <div> */}
            <div className="nasha_on">
                    <img src="/image/vector.png"/>
                    <h4>Наша миссия</h4>
            </div>
                <p>DeSci стремится создать экосистему, в которой ученые заинтересованы в том, <br/>чтобы открыто делиться своими исследованиями и получать признание за <br/>свою работу, позволяя любому легко получить доступ к исследованиям и<br/> внести свой вклад в них.</p>
            {/* </div> */}
            <div className="nasha_tu">
                <img src="/image/vector.png"/>
                <h4>О проекте</h4>
            </div>
                <p>DeSci стремится создать экосистему, в которой ученые заинтересованы в том,<br/> чтобы открыто делиться своими исследованиями и получать признание за <br/>свою работу, позволяя любому легко получить доступ к исследованиям и <br/>внести свой вклад в них. DeSci исходит из идеи, что научные знания должны<br/> быть доступны каждому, а процесс научных исследований должен быть <br/>прозрачным. </p>
            
        </div>
    </div>
    <hr/>
    <div className="body_to">
    {pep.map((item, index)=>(
        <Body_on
            key={index}
            img={item.img}
            name={item.name}
            describe={item.describe}
            className={item.className}
        />
    ))}
    </div>
    <hr/>
  
    {/* <div className="body_sri"> */}
        <div className="body_sri_on">
        <h2>Aльтернатива <br/>издательским домам <br/>и изданиям</h2>
        {/* <div> */}
            
            <button><img src="/image/play.png"/>Смотреть видео</button>
            
            <div className="sri_img">
                <img src="/image/stamp.png"/>
            </div>
        {/* </div> */}
        </div >
        <img className="img" src="/image/img.svg"/>
        
    {/* </div> */}
    </>)
}

export default Body