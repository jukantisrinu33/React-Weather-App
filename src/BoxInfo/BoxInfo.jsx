import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./BoxInfo.css"

let BoxInfo=({data})=>{

   console.log(data);

    let imageUrl;

    if(data.weather==="Rain"){
        imageUrl="https://i.pinimg.com/originals/df/51/80/df51804a05fe7d9ce61fb868f5e759d7.jpg";
        
    }
    else if(data.weather==="Haze"){
        imageUrl="https://img4.goodfon.com/wallpaper/nbig/2/ad/priroda-dymka-derevia-les.jpg"
    }
    else if(data.weather==="Clouds"){
        imageUrl="https://mobimg.b-cdn.net/v3/fetch/f3/f3100c0e75f4a025f5cc605dc67805ab.jpeg?h=2200"
    }
    else if(data.weather==="Thunderstorm"){
        imageUrl="https://th.bing.com/th/id/OIP.5XH0pXr47PW4euUStIb2lwHaEK?rs=1&pid=ImgDetMain";
    }
    else {
        imageUrl="https://th.bing.com/th/id/OIP.nJdUITTFwlssIskQljee5gHaEK?rs=1&pid=ImgDetMain";
    }

        return (
            <>
                <h1 className="h3">{data.city.toUpperCase()} Weather now</h1>
                <div>
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={imageUrl}
                            title={data.weather}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component={"span"}>
                            {data.weather}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Temparature : {data.temp} <b>&deg;C</b></p>
                                <p>Humidity&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.humidity} </p>
                                <p>Min Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.MinTemp}<b>&deg;C</b> </p>
                                <p>Max Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.MaxTemp}<b>&deg;C</b></p>
                                <p><b>Weather feels like: {data.feelslike}&deg;C</b></p>
                            </Typography>
                        </CardContent>
                    
                    </Card>
                </div>
            </>
        )

}

export default BoxInfo;