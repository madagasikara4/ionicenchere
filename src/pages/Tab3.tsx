import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultUrl from '../fonction/Url';
import { useHistory } from 'react-router';
import Load from '../components/Load';
import Rechargement from '../components/Rechargement';



var recharge=''
var compte=''

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
      // present({
      //   message: 'Hello World!',
      //   duration: 1500,
      //   position: 'middle'
      // });
      alert('Compte rechargé')
     })
    .catch(error=>{
        console.log(error)
     })
}

const Tab3: React.FC = () => {
  const [data, setData] = useState<any>([]) 

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
  <>
  <IonMenu contentId="main-content">
  <IonHeader>
    <IonToolbar>
      <IonTitle>Enchere</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">
    <IonMenuToggle>
      <IonButton href="/listeenchere">Liste propre enchere</IonButton>
      <IonButton href="/tab3">Recharger compte</IonButton>
      <IonButton href="/ajout">Ajout enchere</IonButton>
    </IonMenuToggle>  
  </IonContent>
</IonMenu>
<IonPage id="main-content">
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle>Enchere</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">
    <Rechargement />
  </IonContent>
</IonPage>
</>
  );
};

export default Tab3;
