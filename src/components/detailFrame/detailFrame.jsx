import "./detailFrame.css";
import DayFrame from "../dayFrame/dayFrame";

function DetailFrame(props){
    const {data} = props

    return(
        <div className="weather-table">
            <DayFrame data = {data}/>
            <div className="detail-forecast">
                <div className="descr-wrapper"><span className="forecast-descr">Max.temp:</span><span className="descr-value">{Math.round(data.max_temp*10)/10}°C</span></div>
                <div className="descr-wrapper"><span className="forecast-descr">Min.temp:</span><span className="descr-value">{Math.round(data.min_temp*10)/10}°C</span></div>
                <div className="descr-wrapper"><span className="forecast-descr">Wind:</span><span className="descr-value">{Math.floor(data.wind_spd*10)/10} km/h</span></div>
                <div className="descr-wrapper"><span className="forecast-descr">Wind Direction:</span><span className="descr-value">{data.wind_cdir_full}</span></div>
                <div className="descr-wrapper"><span className="forecast-descr">Pressure:</span><span className="descr-value">{Math.round(data.pres)}Pa</span></div>
            </div>
        </div>
    )
}

export default DetailFrame


