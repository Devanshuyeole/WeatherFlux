import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

export default function InfoBox({info}){
    const initialURL= "https://myrepublica.nagariknetwork.com/uploads/media/rain_20210802140558.jpg";
  
    const HOT_URL="https://npr.brightspotcdn.com/dims4/default/71a6604/2147483647/strip/true/crop/5184x3020+0+0/resize/880x513!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fce%2Feb%2Fa40b873d4cb0a2dfc6772662ca30%2Fadobestock-268489083-1.jpeg";
    const COLD_URL="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    // const HAZE_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCs96tyJZMxEW8KYHcM_Dd7D6aWFpGe1se-w&s";
    // const OVERCAST_CLOUD_URL="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/storm-466677_1920.jpg?w=900";
    // const BROKEN_CLOUD_URL="https://live.staticflickr.com/1828/28636482297_bd428f26e8_b.jpg";
    const RAIN_URL="https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg";




    return(
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.wheather}</h1> */}

        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL: info.temp >15 ? HOT_URL: COLD_URL } //condition lavlaya
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity >80 ? <ThunderstormIcon style={{height:"20px"}}/>: info.temp >15 ? <WbSunnyIcon />: <SevereColdIcon />
           } 

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperture= {info.temp}&deg;C </p>
         <p>Humidity= {info.humidity} </p>
         <p>Min Temp= {info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The Weather Can Be Describe As <i>{info.weather}</i> And Feels Like={info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}