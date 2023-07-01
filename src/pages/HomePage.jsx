import React from "react";
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

let simpleDatabase = [
  {
    name: "arif",
  },
  {
    name: "arfad",
  },
  {
    name: "hafid",
  },
  {
    name: "yali",
  },
  {
    name: "anggi",
  },
  {
    name: "angga",
  },
  {
    name: "riski",
  },
  {
    name: "sanjaya",
  },
  {
    name: "diki",
  },
];
function Row({ data }) {
  return (
    <IonRow>
      {data.map((val, key) => {
        let randomKey = Math.floor(Math.random() * 100);
        return (
          <>
            <IonCol>
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
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ronda Hari {getDay()}</IonTitle>
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
            <Row data={simpleDatabase.slice(0, 3)} />
            <Row data={simpleDatabase.slice(3, 6)} />
            <Row data={simpleDatabase.slice(6, 9)} />
          </ion-grid>
        </div>
      </div>
    </>
  );
}

export default HomePage;
