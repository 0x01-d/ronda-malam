import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";

import { IonAvatar } from "@ionic/react";
function LinkPage() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">Home</Link>
      <Link to="/contact">Home</Link>
      <Link to="/ss">Home</Link>
    </>
  );
}
function Row() {
  var getRandomName = (e) => {
    let listNames = [
      "arif",
      "arfad",
      "hafid",
      "yali",
      "anggi",
      "angga",
      "riski",
      "sanjaya",
      "diki",
      "heru",
    ];
    let randomIndex = Math.floor(Math.random() * listNames.length);
    return listNames[randomIndex];
  };
  return (
    <ion-row>
      {[...Array(3)].map((e, key) => {
        return (
          <>
            <ion-col>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <div style={{ padding: "10px" }} />
              <b style={{ color: "black" }}>{getRandomName(4)}</b>
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
            <Row />
            <Row />
            <Row />
          </ion-grid>
        </div>
      </div>
    </>
  );
}

export default HomePage;
