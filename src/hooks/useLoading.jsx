import { useState, useEffect } from "react";

let useLoading = (delay) => {

    let [Loading,setLoading] = useState(true);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setLoading(false);
        },delay)
        return ()=>clearTimeout(timer)

    },[delay]);

    return Loading;

}

export default useLoading;