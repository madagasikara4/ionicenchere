import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Ajout from '../components/AjoutEnchere';
import './Tab2.css';

const Tab2: React.FC = () => {
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
            <IonButton href="/Tab3">Recharger compte</IonButton>
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
          <Ajout />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
