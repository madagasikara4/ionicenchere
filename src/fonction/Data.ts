import axios from "axios"
import { useEffect,useState} from "react";
import defaultUrl from "./Url";

function getData(url: any,method: any,json: any){

    const [data, setData] = useState<Array<any>>([]) 
    const [error, setError] =useState<any>(null)

    useEffect(() => {
        const api = axios.create({
            baseURL: defaultUrl
        })
        if(method==="get"){
            api.get(url)
                .then(res => {             
                    setData(res.data.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="delete"){
            api.delete(url)
                .then(res => {             
                    setData(res.data.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="post"){
            api.post(url,json)
                .then(res => {             
                    setData(res.data.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="put"){
            api.put(url,json)
                .then(res => {             
                    setData(res.data.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
    }, [])
    return {data,error}
} 

export default getData