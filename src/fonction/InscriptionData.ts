import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { Redirect } from "react-router";
import defaultUrl from "./Url";


// function setToken(iduser: any, tokenvalue: any) {
//     localStorage.setItem("iduser", iduser);
//     localStorage.setItem("token", tokenvalue);
// }


function InscriptionData(url: string, json: any) {

    var data=null
    var error=null
    var baseURL= defaultUrl

    
    // const api = fetch. create({
    //     baseURL: `https://localhost:8080`//`https://webservice-production-6ef4.up.railway.app`
    // })

    fetch( baseURL+"/users",{
        method :"POST",
        headers :{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(json),
    })
        
    // api.post(url, json)
    //     .then(res => {
    //         data=res.data.data
    //         // console.log(json)
    //         // console.log(data)
    //         return json 
    //     })
    //     .catch(err => {
    //         // console.log(json)
            
    //         error=err
    //         console.log(error)
    //         return json
    //     })
    
}

export default InscriptionData