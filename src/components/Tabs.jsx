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
import { Link } from "react-router-dom";

// export default function Tabs2() {
//   return (
//     <div className="footer">
//       <IonTabBar slot="bottom">
//         <IonTabButton tab="home">
//           <IonIcon icon={logoWindows} color="success" />
//           <IonLabel>Jadwal</IonLabel>
//         </IonTabButton>

//         <IonTabButton tab="radio" href="/misi">
//           <IonIcon icon={logoTiktok} color="danger" />
//           <IonLabel>Misi</IonLabel>
//         </IonTabButton>

//         <IonTabButton tab="library" href="/semua-hari">
//           <IonIcon icon={alarmOutline} color="warning" />
//           <IonLabel>Semua Hari</IonLabel>
//         </IonTabButton>

//         <IonTabButton tab="search" href="/anggaran">
//           <IonIcon icon={logoBuffer} color="tertiary" />
//           <IonLabel>Anggaran Kopi</IonLabel>
//         </IonTabButton>
//         <IonTabButton tab="admin" href="/admin">
//           <IonIcon icon={settingsOutline} color="secondary" />
//           <IonLabel>Admin</IonLabel>
//         </IonTabButton>
//       </IonTabBar>
//     </div>
//   );
// }

export default function Tabs() {
  var fontSize = "11px";
  return (
    <div className="footer">
      <ion-tab-bar slot="bottom">
        <Link to="/home" style={{ margin: "40px" }}>
          <ion-tab-button style={{ fontSize }}>
            <IonIcon icon={logoWindows} color="success" />
            Jadwal
          </ion-tab-button>
        </Link>
        <Link to="/misi" style={{ margin: "0px" }}>
          <ion-tab-button style={{ fontSize }}>
            <IonIcon icon={logoTiktok} color="danger" />
            Misi
          </ion-tab-button>
        </Link>
        <Link to="/semua-hari" style={{ margin: "40px" }}>
          <ion-tab-button style={{ fontSize }}>
            <IonIcon icon={alarmOutline} color="warning" />
            Hari
          </ion-tab-button>
        </Link>
        <Link to="/anggaran" style={{ margin: "0px" }}>
          <ion-tab-button style={{ fontSize }}>
            <IonIcon icon={search} color="tertiary" />
            Cari
          </ion-tab-button>
        </Link>
        <Link to="/admin" style={{ margin: "40px" }}>
          <ion-tab-button style={{ fontSize }}>
            <IonIcon icon={settingsOutline} color="secondary" />
            Anggaran
          </ion-tab-button>
        </Link>
      </ion-tab-bar>
    </div>
  );
}
