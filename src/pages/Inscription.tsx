import { IonAlert, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import InscriptionData from '../fonction/InscriptionData';


var nom="";
var pwd="";
// var numcompte="currval('')";


const Inscription: React.FC = () => {

    const [showAlert, setShowAlert] = useState(false);
    const route=useHistory()

    function estconnecte(){
        setShowAlert(false)
        route.push("/tab1")
    }
    
    var incription = () => {
        const formData={

            "nomuser" : nom,
            "mdp" : pwd
        };
        InscriptionData('/users',formData);
        setShowAlert(true)
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inscription</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow>
                    <IonCol>
                        <IonIcon style={{ fontSize: "70px", color: "white" }} icon={personCircle} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput type="text" name='nomuser' onIonChange={(e) => nom=e.detail.value!} ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Mot de passe</IonLabel>
                            <IonInput type="password" name='password' onIonChange={(e) => pwd=e.detail.value!} ></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand="block" shape="round" onClick={incription} >S'inscrire</IonButton>
                    </IonCol>
                </IonRow>
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={() => estconnecte()}
                  header={'Succes'}
                  message={'Ajouté'}
                  buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};


export default Inscription;
