import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import { playCircle, radio, library, search } from "ionicons/icons";

export default function Tabs() {
  return (
    <div className="footer">
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={playCircle} />
          <IonLabel>Jadwal</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/radio">
          <IonIcon icon={radio} />
          <IonLabel>Lokasi</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/library">
          <IonIcon icon={library} />
          <IonLabel>Semua Hari</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Anggaran Kopi</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </div>
  );
}
