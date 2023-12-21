import React, { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonList,
  IonAvatar,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useEffect } from "react";
import simpleDatabase from "../database/jadwal";

function Modal({ isOpen, setIsOpen, schedule }) {
  const [day, setDay] = useState("");
  const filteredDatabase = simpleDatabase.filter((e) => e.day === schedule);
  useEffect(() => {
    document.addEventListener("click", function (e) {
      console.log(e.target.innerText, e.target.innerText.includes("Hari"));
      if (e.target.innerText == "Tutup" || e.target.innerText == "TUTUP") {
        setIsOpen(false);
      }
      if (e.target.innerText.includes("Hari")) {
        setDay(e.target.innerText);
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jadwal {day}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>Tutup</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true}>
          {filteredDatabase.map((e, index) => {
            return (
              <IonItem key={index}>
                <IonAvatar aria-hidden="true" slot="start">
                  <img
                    alt=""
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonLabel>{e.name}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonModal>
  );
}

export default Modal;
