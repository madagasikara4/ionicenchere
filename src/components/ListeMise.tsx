import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Push from 'push.js'

const ListeMise: React.FC = () => {

  var notif=()=>{
    Push.create("Mety")
  }


  return (
    <>
      <IonButton onClick={notif}>Liste Mise</IonButton>
    </>
  );
};

export default ListeMise;
