import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"//avoid this red line
import { useState } from "react"

export default function WhetherApp(){
    const [whetherInfo,setWhetherInfo]=useState(
        {
            city:"Mumbai",
            feelsLike:32,
            humidity:83,
            temp:27.99,
            weather:"light rain",
            tempMin:27.99,
            tempMax:27.99,
      });

      let updateWhetherInfo = (newInfo)=>{
        setWhetherInfo(newInfo); //whteherresult madhe new result chi object pass honar re-rendering honar
      }

    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"black"}}>WeatherFlux</h2>
            <SearchBox updateWhetherInfo={updateWhetherInfo}/>
            <InfoBox info={whetherInfo}/>
        </div>
    )
}