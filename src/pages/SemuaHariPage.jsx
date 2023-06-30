import React from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonNavLink,
  IonButton,
} from "@ionic/react";
import Modal from "../components/inline-modal";
import { useState } from "react";

const SemuaHariPage = () => {
  const [openModal, setOpenModal] = useState(false);
  // useEffect(() => {
  //   document.addEventListener("click", function (e) {
  //     console.log(e.target.innerText);
  //     if (e.target.innerText.includes("Hari")) {
  //       setOpenModal(true);
  //     }
  //   });
  // }, [true]);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jadwal Semua Hari</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Modal isOpen={openModal} setIsOpen={setOpenModal} />
      <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   height: "100%",
      // }}
      >
        <IonList inset={true}>
          <IonItem>
            <IonLabel>Hari Minggu</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Senin</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Selasa</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Rabu</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Kamis</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Jum'at</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hari Sabtu</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </>
  );
};

export default SemuaHariPage;
