import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
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
    <ion-row>
      {data.map((val, key) => {
        let randomKey = Math.floor(Math.random() * 100);
        return (
          <>
            <ion-col>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src={"https://picsum.photos/80/80?random=" + randomKey}
                />
              </IonAvatar>
              <div style={{ padding: "10px" }} />
              <b style={{ color: "black" }}>{val.name}</b>
            </ion-col>
          </>
        );
      })}
    </ion-row>
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
