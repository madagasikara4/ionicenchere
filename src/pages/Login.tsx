import { IonAlert, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import LoginData from '../fonction/LoginData';
import { Toast } from "@capacitor/toast";
import { useHistory } from 'react-router';
import Load from '../components/Load';
import { useState } from 'react';
import axios from 'axios';
import defaultUrl from '../fonction/Url';


var id="Rabe";
var pwd="rabe";

function setToken(iduser: any, tokenvalue: any) {
    localStorage.setItem("iduser", iduser);
    localStorage.setItem("token", tokenvalue);
    return 4;
}




const Login: React.FC = () => {

    // const[toast]=useIonToast();
    const [showAlert, setShowAlert] = useState(false);
    const route=useHistory()

    function estconnecte(){
        setShowAlert(false)
        route.push("/tab3")
    }
    
    var login = () => {
        
        const formData={
            "nomuser" : id,
            "mdp" : pwd
        }

        var data=null
        var error=null
        console.log("step1")
        const api = axios.create({
            baseURL: defaultUrl
        })
        let val=1
        api.post('/users/login', formData)
            .then(res => {
                data=res.data.data
                val=setToken(data.iduser,data.token)
                setShowAlert(true)
            })
            .catch(err => {
                console.log("error")
                error=err
                val=1
            })
        
        // LoginData(,formData)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow>
                    <IonCol>
                        <IonIcon style={{ fontSize: "70px", color: "#383a3e" }} icon={personCircle} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Identifiant</IonLabel>
                            <IonInput value="Rabe" type="text" name='identifiant' onIonChange={(e) => id=e.detail.value!} ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Mot de passe</IonLabel>
                            <IonInput value="rabe" type="password" name='password' onIonChange={(e) => pwd=e.detail.value!} ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand="block" shape="round" onClick={login} >Login</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonLabel style={{ display:'flex', alignItems: 'center', justifyContent:'center'}}>OU</IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton href="/inscription" shape="round" style={{ display:'flex', alignItems: 'center', justifyContent:'center'}}>Inscription</IonButton>
                    </IonCol>
                </IonRow>
                    <IonAlert
                      isOpen={showAlert}
                      onDidDismiss={() => estconnecte()}
                      header={'Succes'}
                      message={'Connecte'}
                      buttons={['OK']}
                    />
            </IonContent>
        </IonPage>
    );
};

export default Login;
