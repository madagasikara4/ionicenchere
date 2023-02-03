import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tab5 from './pages/Tab5';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import { useState } from 'react';
import PushNotificationsContainer from './components/Notification';
import OneSignal from 'onesignal-cordova-plugin';

setupIonicReact();


var deconnection = () => {
  localStorage.clear();
  window.location.reload()
};


const App: React.FC = () => {
  function OneSignalInit():void{
    OneSignal.setAppId("96703271-294d-46d1-934d-252d5e45c969");
    OneSignal.setNotificationOpenedHandler(function (jsonData){
      console.log('notificationOpenedCallback: '+JSON.stringify(jsonData));
    });

    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted){
      console.log("User accepted notifications: "+accepted )
    });
  }
  OneSignalInit();

  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Login />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route exact path="/listeenchere">
            <Tab4 />
          </Route>
          <Route exact path="/listemise">
            <Tab5 />
          </Route>
          <Route exact path="/ajout">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/notif">
            <PushNotificationsContainer />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>


        
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1" onClick={deconnection}>
            <IonIcon icon={triangle} />
            <IonLabel>Deconnexion</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
}

export default App;
