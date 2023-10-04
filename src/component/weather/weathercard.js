import React, { useEffect, useState } from 'react'

 const Weathercard= ({tempInfo})=> {
    const [weatherstate,setweatherstate]=useState("");
    //destructuring of tempinfo
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,speed,
        country,sunset,

    }=tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                setweatherstate("wi-day-cloudy");
                break;
                case "Haze":
                    setweatherstate("wi-fog");
                    break;
                    case "Clear":
                        setweatherstate("wi-day-sunny");
                        break;

                default:
                    setweatherstate("wi-day-cloudy");
                    break;
            }
        }
    },[weathermood]);

    let sec=sunset;
    let date=new Date(sec * 1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}`
  return (
   <>
   <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherstate}`}></i>
                </div>

                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span >{temp}</span>
                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>
                            {weathermood}
                        </div>
                        <div className='place'>
                          {name},{country}
                        </div>
                    </div>
                </div>

                <div className='date'>{new Date().toLocaleString()}</div>
                {/* our 4 divided section */}

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-sunset'}></i>

                            </p>
                            <p className='extra-info-leftside'>
                            {timestr} <br />
                                sunset
                            </p>
                        </div>
                       
                        {/* <div className='weather-extra-info'>
                        <div className='temp-info-minmax'> */}
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-humidity'}></i>

                            </p>
                            <p className='extra-info-leftside'>
                                
                                {humidity}<br />
                                Humidity
                            </p>
                        </div>
                        {/* </div>
                        </div> */}

                        {/* <div className='weather-extra-info'> */}
                        
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-strong-wind'}></i>

                            </p>
                            <p className='extra-info-leftside'>
                               
                            {pressure}<br />
                            Pressure
                            </p>
                        {/* </div> */}
                        </div>
                       
                    </div>
                </div>



            </article>
   </>
  )
}

export default Weathercard;
