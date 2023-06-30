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
} from "ionicons/icons";
// import { Link } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="footer">
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={bookmarkOutline} />
          <IonLabel>Jadwal</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/lokasi">
          <IonIcon icon={radio} />
          <IonLabel>Lokasi</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/semua-hari">
          <IonIcon icon={alarmOutline} />
          <IonLabel>Semua Hari</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/anggaran">
          <IonIcon icon={logoBuffer} />
          <IonLabel>Anggaran Kopi</IonLabel>
        </IonTabButton>
        <IonTabButton tab="admin" href="/admin">
          <IonIcon icon={constructOutline} />
          <IonLabel>Admin</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </div>
  );
}
