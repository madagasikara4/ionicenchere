import { Toast } from "@capacitor/toast";
import { useIonRouter } from "@ionic/react";
import axios from "axios";
import { useHistory } from "react-router";
import { Router } from "workbox-routing";
import defaultUrl from "./Url";

function setToken(iduser: any, tokenvalue: any) {
    localStorage.setItem("iduser", iduser);
    localStorage.setItem("token", tokenvalue);
    return 4;
}

function LoginData(url: string, json: any) {

    var data=null
    var error=null
    console.log("step1")
    const api = axios.create({
        baseURL: defaultUrl
    })
    let val=1
    api.post(url, json)
        .then(res => {
            data=res.data.data
            val=setToken(data.iduser,data.token)
            
        })
        .catch(err => {
            console.log("error")
            error=err
            val=1
        })
    return val
    
}

const showToast = async (msg: string) => {
    await Toast.show({
        text: msg
    })
}

export default LoginData