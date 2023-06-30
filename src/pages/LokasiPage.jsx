import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const LokasiPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Lokasi Ronda</IonTitle>
      </IonToolbar>
    </IonHeader>
    <div style={{ padding: "20px" }} />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      Target RT 03
      <br />
      Dari jalan 1 - 8
    </div>
  </>
);

export default LokasiPage;
