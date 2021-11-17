import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from "./firstPage/firstPage";
import SecondPage from "./secondPage/secondPage";
import {Spinner} from "react-bootstrap"


const api = {
    key: "f0fd8d16083a4867a67096c307013efd",
    base: "https://api.weatherbit.io/v2.0/forecast/daily?city="

}


function App() {
    const [forecastList, setForecastList] = useState([]);
    const [city, setCity] = useState(localStorage.getItem("storageCity"));
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData(city || 'Minsk');
    }, [city])

    const search = async (e) => {
        if (e.key === "Enter") {
            setLoading(false)
            fetchData(e.target.value);
            e.target.value = ''
        }
    };

    const fetchData = (city) => {
        try {
            fetch(`${api.base}${city}&key=${api.key}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                localStorage.setItem("storageCity", data.city_name)
                setForecastList(data.data)
                setCity(localStorage.getItem("storageCity"));
                setLoading(true);
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
       <div className="wrapper">
           {loading ? (
               <Router>
                   <h1 className="forecast-title">Weather <span>Forecast</span></h1>
                   <Routes>
                       <Route path="/" exact element={
                           <FirstPage
                               forecast={forecastList[0]}
                               city={city}
                               onEvent={search}
                               fetch={fetchData}/>

                       }/>

                       <Route path="/more" exact element={
                           <SecondPage
                               data={forecastList}
                               city={city}
                           />
                       }/>
                   </Routes>

               </Router>) : (<Spinner animation="border" />)}
       </div>
    )
}

export default App

