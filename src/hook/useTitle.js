import { useEffect } from "react";


const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-clean teeth`
    },[title])

};
export default useTitle;