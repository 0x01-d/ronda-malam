import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import {
  playCircle,
  radio,
  library,
  search,
  keyOutline,
  keypadOutline,
  documentTextOutline,
  bookmarkOutline,
  constructOutline,
  logoBuffer,
  alarmOutline,
  settingsOutline,
  logoWindows,
  logoTiktok,
} from "ionicons/icons";
// import { Link } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="footer">
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={logoWindows} color="success" />
          <IonLabel>Jadwal</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/misi">
          <IonIcon icon={logoTiktok} color="danger" />
          <IonLabel>Misi</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/semua-hari">
          <IonIcon icon={alarmOutline} color="warning" />
          <IonLabel>Semua Hari</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/anggaran">
          <IonIcon icon={logoBuffer} color="tertiary" />
          <IonLabel>Anggaran Kopi</IonLabel>
        </IonTabButton>
        <IonTabButton tab="admin" href="/admin">
          <IonIcon icon={settingsOutline} color="secondary" />
          <IonLabel>Admin</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </div>
  );
}
