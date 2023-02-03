import { IonAlert, IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultUrl from '../fonction/Url';
import { useHistory } from 'react-router';
import Load from '../components/Load';



var recharge=''
var compte=''

const Rechargement: React.FC = () => {
  const [data, setData] = useState<any>([]) 
  const [showAlert, setShowAlert] = useState(false);


  const iduser=localStorage.getItem('iduser')
  
  useEffect(() => {
      const api = axios.create({
          baseURL: defaultUrl
      })
          api.get("/users/"+iduser)
              .then(res => {             
                  setData(res.data.data)
               })
              .catch(err=>{
                  console.log(err)
               }) 
  }, [])

  
var rechargement = () =>{

  const formData={
      "numerocompte" : compte,
      "montant" : recharge
  }
  console.log(formData)

    const api = axios.create({
        baseURL: defaultUrl
    })
    api.post("/users/recharge",  formData
    )
    .then(res => {  
      setShowAlert(true)
     })
    .catch(error=>{
        console.log(error)
     })
}


  
  var route=useHistory();
  if(iduser==null){
    route.push("/tab1")
    // window.location.reload()
  }

  if(data.length==0){
    return (<><Load /></>)
  }

  let num=null
  let montant=null

  num=data.numerocompte
  montant=data.montant
  compte=num

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rechargement</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rechargement</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <IonItem>
          <IonLabel>
            <h1>Numero de compte: {num}</h1>
            <p>Solde actuel: {montant}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Recharger:</IonLabel>
          
          <IonInput placeholder="entrer un montant" onIonChange={(e) => recharge=e.detail.value!} ></IonInput>
          <IonButton expand="block" onClick={rechargement} >Recharger</IonButton>

        </IonItem>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Succes'}
          message={'Compte Rechargé'}
          buttons={['OK']}
        />
      
      </IonContent>
    </IonPage>
  );
};

export default Rechargement;
