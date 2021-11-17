
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
                <span className="temp">`{Math.round(data.temp*10)/1}°C`</span>
                <span className="weather">{data.weather.description}</span>
            </div>
        </div>
    );

}

export default DayFrame


function reducer(arr, callback, start = 0){
    let temporaryObj = start;
    for( let item of arr){
        temporaryObj =  callback(temporaryObj, item);
    }
    return temporaryObj
}

console.log(reducer([1, 2, 3, 4], (a, b) => a +b ), 1)