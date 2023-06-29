import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";

import { IonAvatar } from "@ionic/react";

function List() {
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
    <div>
      <ion-grid fixed={true}>
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
      </ion-grid>
    </div>
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
        {/* <span> Listen now content</span> */}
        <List />
      </div>
    </>
  );
}

export default HomePage;
