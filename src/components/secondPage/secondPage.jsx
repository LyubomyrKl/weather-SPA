
import {Link} from "react-router-dom";
import "./secondPage.css"
import DetailFrame from "../detailFrame/detailFrame"
import React from "react";
import Slider from "../slider/slider";

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
                    <i className="fas fa-angle-double-left"></i>Go Back
                </Link>
            </div>
        </div>
    )

}

export default SecondPage;
