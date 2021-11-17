import {Link} from "react-router-dom";
import "./firstPage.css";
import DetailFrame from "../detailFrame/detailFrame";

function FirstPage(props){

    const {forecast, city, onEvent, fetch} = props;

    console.log(forecast)
    const setCity  = (e) => {
        if(e.target.classList.contains('bound_btn')){
            const text = e.target.innerText
            fetch(text)
        }
    }


    return (
        <div className="firstPage-wrapper">
             <div onClick={e => setCity(e)} className="buttons">
                 <button className="bound_btn">Minsk</button>
                 <button className="bound_btn">Bratislava</button>
                 <button className="bound_btn">Moscow</button>
             </div>
            <div className="input-wrapper">
                <input id="input" placeholder="Search your city" type="text" onKeyDown={ e => onEvent(e)}/>
            </div>
             <div>
                <h1 className="detail-city">{city}</h1>
             </div>
            <DetailFrame  data={forecast}/>
             <Link to="/more" className="btn more">
                More  <i className="fas fa-angle-double-right"></i>
             </Link>

        </div>
    )
}

export default FirstPage;