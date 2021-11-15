
import "./dayFrame.css";


function DayFrame ({data}){
    const  dateBuilder = (d) =>{
        let months = ["January", "February",
            "March", "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"]

        let  days = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()],
            date =  d.getDate(),
            month = months[d.getMonth()],
            year = d.getFullYear();

        return `${day} ${date}, ${month}, ${year}`
    };


    return(

        <div className="frame">
            <span className="date">{dateBuilder(new Date(data.datetime))}</span>
            <div className="weather-box">
                <span className="temp">`{data ? Math.round(data.temp*10)/10 : 'kek'}°C`</span>
                <span className="weather">{data ? data.weather.description : "load"}</span>
            </div>
        </div>
    );

}

export default DayFrame