import React from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { call, heart, pin } from "ionicons/icons";

import { Link } from "react-router-dom";
import { bookmarkOutline } from "ionicons/icons";

function Footer() {
  return (
    <IonFooter className="footer">
      <IonSegment value="heart">
        <IonSegmentButton value="call">
          <IonLabel>Call</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart">
          <IonLabel>Heart</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin">
          <IonLabel>Misi</IonLabel>
          <IonIcon icon={pin}></IonIcon>
          {/* <Link to="/misi"></Link> */}
        </IonSegmentButton>
      </IonSegment>
    </IonFooter>
  );
}

export default Footer;
