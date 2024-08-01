
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./form.css"
import { useState } from 'react';
import axios from 'axios';

let Form =({UpdatedInfo})=>{
    

    let [city,setCity]=useState("");
    let [error,seterror]=useState(false);



    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY=JSON.stringify(import.meta.env.API_KEY);

    let getWeatherInfo=async (city)=>{
        let apicords=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        
        let result={};
        await axios.get(apicords).then((res)=>{
           
            result.temp=res.data.main.temp;
            result.MinTemp=res.data.main.temp_min;
            result.MaxTemp=res.data.main.temp_max;
            result.humidity=res.data.main.humidity;
            result.feelslike=res.data.main.feels_like;
            result.weather=res.data.weather[0].main;
            result.city=city

        })
        .catch((err)=>{
            console.log("Some error occured");
            throw err;
        });

        return result;

    }

   

    let handleInput=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            let result=await getWeatherInfo(city);
            console.log(result);
            UpdatedInfo(result);
            setCity("");
            seterror(false);
        }
        catch(err){
            seterror(true);
        }
    }


    return (
        <>
            <div className='input-div'>
                <form onSubmit={handleSubmit}>
                    <h1 id='Heading'>Search for Weather Today</h1>
                    <TextField 
                        id="outlined-basic" 
                        label="City-Name" 
                        variant="outlined" 
                        className='search'
                        required 
                        value={city}
                        onChange={handleInput}
                    />
                    <Button 
                        variant="contained" 
                        className='button-search' 
                        type='submit'
                      
                    >Search</Button>
                </form>
                {error && <p className='error'>Sorry, No such places exists in our api</p>}
            </div>
        </>
    )
}

export default Form;