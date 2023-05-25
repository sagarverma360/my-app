import { useState } from "react"

const useTrackLocation=()=>{
    const [latLong,setLatLong]=useState("");
    const [locationErrorMsg,setLocationErrorMsg]=useState("");
    const [isFindingLocation,setIsFindingLocation]=useState(false);
    const success=(position:any)=>{        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`${latitude},${longitude}`);
        setLocationErrorMsg("");
        setIsFindingLocation(false);
    }
    const error=()=>{     
        setIsFindingLocation(false);        
        setLatLong("");
        setLocationErrorMsg("Unable to retrieve your location");
    }
    const handelTrackLocation=()=>{        
        setIsFindingLocation(true);
        if(!navigator.geolocation){
            setIsFindingLocation(false);
            setLatLong("");
            setLocationErrorMsg("Geolocation is not supported by your browser.");   
        }else{
            navigator.geolocation.getCurrentPosition(success,error);
        }
    }
    return {
        latLong,
        locationErrorMsg,
        handelTrackLocation,
        isFindingLocation
    }
}

export default useTrackLocation;