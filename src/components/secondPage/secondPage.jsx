
import {Link} from "react-router-dom";
import "./secondPage.css";
import Slider from "../slider/slider";
import {FontAwesomeIcon} from   "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons"
function SecondPage (props){
    const{data, city} = props;

    return (
        <div className="second-page-wrapper">
            <h2 className="city">{city}</h2>

            <div>
                <Slider data={data}/>
            </div>
            <div className="btn-box">
                <Link to="/" className="btn go-back">
                    <FontAwesomeIcon icon={faAngleDoubleLeft}/> Go Back
                </Link>
            </div>
        </div>
    )

}

export default SecondPage;
