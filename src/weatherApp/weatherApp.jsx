import Form from "../Form/form";
import BoxInfo from "../BoxInfo/BoxInfo";
import "./weatherApp.css"
import { useState } from "react";


let WeatherApp =()=>{

    let [data,setData]=useState({
        city:"delhi",
        MaxTemp: 26.43,
        MinTemp: 26.43,
        feelslike: 26.43,
        humidity: 89,
        temp: 26.43,
        weather: "Haze"
    });

    let UpdatedInfo=(result)=>{
      if(result){
        console.log(result);
        return setData(result);
      }
    }


    return (
        
            <div className="Head-div">
              <Form UpdatedInfo={UpdatedInfo}/>
              {}
              <BoxInfo data={data}/>
            </div>
          
    )
}

export default WeatherApp;