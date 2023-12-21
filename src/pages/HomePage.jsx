import React from "react";
import simpleDatabase from "../database/jadwal";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
// import { IonIcon } from "@ionic/react";
// import { logoIonic } from "ionicons/icons";

import { IonAvatar } from "@ionic/react";

function Row({ data }) {
  return (
    <IonRow>
      {data.map((val, key) => {
        let randomKey = Math.floor(Math.random() * 100);
        let date = new Date();
        return (
          <>
            <IonCol key={date}>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src={"https://picsum.photos/80/80?random=" + randomKey}
                />
              </IonAvatar>
              <div style={{ padding: "10px" }} />
              <b style={{ color: "black" }}>{val.name}</b>
            </IonCol>
          </>
        );
      })}
    </IonRow>
  );
}

function HomePage() {
  function getDay() {
    let thisDay = new Date().getDay();
    let listDay = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    return listDay[thisDay];
  }
  function listByJadwal() {
    const databaseFiltered = simpleDatabase.filter(
      (val) => val.day === getDay()
    );
    const row1 = databaseFiltered.slice(0, 3);
    const row2 = databaseFiltered.slice(3, 6);
    const row3 = databaseFiltered.slice(6, 9);
    return { row1, row2, row3 };
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ronda day {getDay()}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div style={{ padding: "10px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div>
          <ion-grid fixed={true}>
            <Row data={listByJadwal().row1} />
            <Row data={listByJadwal().row2} />
            <Row data={listByJadwal().row3} />
          </ion-grid>
        </div>
      </div>
    </>
  );
}

export default HomePage;
