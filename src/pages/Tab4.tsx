import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import ListeEnchere from '../components/ListeEnchere';

const Tab4: React.FC = () => {

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
          <ListeEnchere />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab4;
