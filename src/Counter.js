import React,{ useState, useEffect } from "react";


const initLocationState = {
    latitude: null,
    longitude: null,
    speed: null
}

const Counter=()=> {

    //state objects, useState allows functionless/non class components to use state object
const [count, setCount] = useState(0);
const [isOn, setIsOn] = useState(false);
const [mousePos,setMousePos] = useState({x:null, y: null});
const [status,setStatus]=useState(navigator.onLine);
const [{latitude,longitude,speed}, setLocation]=useState(initLocationState);
let mounted = true;

//useEffect hook passes a function
//useEffects allow for use of api's and also lifecycle mounting/updating and unMounting
useEffect(()=> {
    //document api
    document.title=`You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
  const watchId =  navigator.geolocation.watchPosition(handleGeoLocation);

       //cleanup function, unMounting the component
    return ()=> {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        navigator.geolocation.clearWatch(watchId);
        mounted =false;
    }
},[count]);
//geoLocation method, that checks mounting
const handleGeoLocation=(e)=> {
    if(mounted){
           setLocation({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude,
        speed: e.coords.speed,
    })
    }
}
//method for onLine status
const handleOnline=()=> {
    setStatus(true);
}
//method for offLine status
    const handleOffline = () => {
        setStatus(false);
    }
    //method for mouseMove status
const handleMouseMove=e=>{
    setMousePos({
        x: e.pageY,
        y:e.pageY
    })
}
//method for increment counter
const incrementCount =()=> {
    setCount(prevCount => prevCount +1);
}
////method chnagecolor
const changeColor =()=> {
    setIsOn(prevState=> !prevState);
    }


return (
    <>
<button onClick={incrementCount}>I was Clicked {count}</button>
    <img src={isOn ? 'https://icon.now.sh/note_add/E7DF38' : 'https://icon.now.sh/note_add/453A6E'} style={{ height: '50px', width: '50px' }} alt="FlashLight"
    onClick={changeColor}/>
    <h2>Mouse Position</h2>
    {JSON.stringify(mousePos, null, 2)}
    <hr/>
    <h2>Network Status</h2>
    <p>You are: <strong>{status ? "online":"offline"}</strong></p>
    <h2>GeoLocation</h2>
    <p>Latitude is {latitude}</p>
    <p>Longitude is {longitude}</p>
    <p>Speed is {speed? speed: "0"}</p>
</>
);
};
export default Counter;