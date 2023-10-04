import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard';


export const Temp = () => {

    const[searchvalue,setsearchvalue]=useState("pune");

    const[tempinfo,settempinfo]=useState({});
    const getWeatherinfo=async()=>{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=65bd8237a4be89b0d00789bf95e824e1`;
                const res=await fetch(url);
                const data=await res.json();

                //destructuring
                const {temp,humidity,pressure}=data.main;
                const {main:weathermood}=data.weather[0];
                const {name}=data;
                const {speed}=data.wind;
                const {country,sunset}=data.sys;
                const mynewweatherinfo={
                    temp,humidity,pressure,weathermood,name,speed,country,sunset,

                };
                settempinfo(mynewweatherinfo);
                console.log(temp);
                console.log(data);
        }catch(error){
            console.log(error)
        }

    };
    useEffect(()=>{
        getWeatherinfo();
    },[]);
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='search...' autoFocus id="search"
                        className='searchTerm'  value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
                    <button className='searchButton' type='button' onClick={getWeatherinfo}>
                        Search
                    </button>
                </div>

            </div>
            <Weathercard tempInfo={tempinfo}/>

        </>
    )
}
