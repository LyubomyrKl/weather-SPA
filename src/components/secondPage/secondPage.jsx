
import {Link} from "react-router-dom";
import "./secondPage.css"
import DetailFrame from "../detailFrame/detailFrame"
import React from "react";

function SecondPage (props){
    const{data, city} = props;

    const elements = data.map(item=>{
        return(
            <div key={item.moonrise_ts}>
                <DetailFrame  data={item}/>
            </div>
        )
    })

    return (
        <div>
            <h2 className="city">{city}</h2>

            <div className='secondPage-wrapper'>
                {elements}
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
