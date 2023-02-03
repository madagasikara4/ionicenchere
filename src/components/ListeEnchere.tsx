import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import defaultUrl from "../fonction/Url";
import Login from "../pages/Login";
import Load from "./Load";

function statut(id: number) {
  if(id==1)
    return "terminé"
  else
    return "en cours"
}

const ListeEnchere: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]) 
  const iduser=localStorage.getItem('iduser')

  
  useEffect(() => {
      const api = axios.create({
          baseURL: defaultUrl
      })
          api.get("/produits/photo/"+iduser)
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
    window.location.reload()
  }

  if(data.length==0){
    return (<><Load /></>)
  }

  return (
    <>
    {data.map((item) => (
      <IonCard key={item.idproduit}>
      <img src={"data:image/*;base64,"+item.image[0]} />
      <IonCardHeader>
        <IonCardTitle>{item.nomproduit}</IonCardTitle>
        <IonCardSubtitle>{item.descri}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRow><IonLabel>Categorie: {item.nomcategorie}</IonLabel></IonRow>
        <IonRow><IonLabel>Duree: {item.duree}h</IonLabel></IonRow>
        <IonRow><IonLabel>Prix enchere: {item.prixenchere}Ar</IonLabel></IonRow>
        <IonRow><IonLabel>Statut: {statut(item.statut)}</IonLabel></IonRow>
      </IonCardContent>
    </IonCard>
    ))}
    </>
  );
};

export default ListeEnchere;
