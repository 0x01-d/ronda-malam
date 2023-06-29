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
} from "@ionic/react";
import { useEffect } from "react";

function Modal({ isOpen, setIsOpen }) {
  const [day, setDay] = useState("");
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
          quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos,
          dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>
      </IonContent>
    </IonModal>
  );
}

export default Modal;
