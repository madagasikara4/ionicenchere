import { Toast } from "@capacitor/toast";
import { IonAlert, IonButton, IonImg, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultUrl from "../fonction/Url";

var nom='';
var description='';
var categorie='';
var prix=0;
var dure=0;
var photo=[''];



const Ajout: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]) 
  const [showAlert, setShowAlert] = useState(false);

  
var ajout = () =>{
  let iduser=parseInt(localStorage.getItem('iduser')!)

  const formData={
    "nomproduit": nom,
    "descri": description,
    "idutilisateur": iduser,
    "idcategorie": categorie,
    "prixmin" : prix,
    "prixenchere": prix,
    "duree" : dure,
    "image": photo

  }
  console.log(formData)


  const api = axios.create({
      baseURL: defaultUrl
  })
  api.post("/produits/photo",  formData
  )
  .then(res => {  
    setShowAlert(true)
   })
  .catch(error=>{
      console.log(error)
   })
}

  
  useEffect(() => {
      const api = axios.create({
          baseURL: defaultUrl
      })
          api.get("/categories")
              .then(res => {             
                  setData(res.data.data)
               })
              .catch(err=>{
                  console.log(err)
               }) 
  }, [])


  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    for (let i = 0; i < event.target.files!.length; i++) {
      const file = event.target.files![i];
      const reader = new FileReader();
      reader.onloadend = () => {
        let str=reader.result as string
        if(photo[0]==='')
          photo[0]=str.split(",")[1];
        else
          photo.push(str.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <>
      <IonItem fill="outline">
            <IonLabel position="floating">Nom du produit</IonLabel>
            <IonInput placeholder="entrer un nom" onIonChange={(e) => nom=e.detail.value!}></IonInput>
      </IonItem>
        <IonItem fill="outline">
            <IonLabel position="floating">Photo</IonLabel>
            <IonInput> <input type="file" accept="image/*" multiple onChange={handleFileInput} /> </IonInput>
        </IonItem>
        <IonItem fill="outline">
            <IonLabel position="floating">Description  </IonLabel>
            <IonInput placeholder="entrer une description" onIonChange={(e) => description=e.detail.value!}></IonInput>
        </IonItem>
        <IonItem fill="outline">
            <IonLabel >Catégorie  </IonLabel>
            <IonSelect interface="popover" placeholder="categorie" onIonChange={(e) => categorie=e.detail.value!}>
            {data.map((item) => (
              <IonSelectOption key={item.idcategorie} value={item.idcategorie}>{item.nomCategorie}</IonSelectOption>
            ))}
            </IonSelect>
        </IonItem>
        <IonItem fill="outline">
            <IonLabel position="floating">Prix minimal  </IonLabel>
            <IonInput placeholder="entrer un prix" onIonChange={(e) => prix=parseInt(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem fill="outline">
            <IonLabel position="floating">Durée  </IonLabel>
            <IonInput placeholder="entrer un durée en H" onIonChange={(e) => dure=parseInt(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton expand="block"  onClick={ajout}>Ajouter</IonButton>      
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Succes'}
          message={'Ajouté'}
          buttons={['OK']}
        />
    </>
  );
};

export default Ajout;
