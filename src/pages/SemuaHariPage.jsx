import React, { useEffect, useState } from "react";
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

const SemuaHariPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectSchedule, setSelectSchedule] = useState("");
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
      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        schedule={selectSchedule}
      />
      <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   height: "100%",
      // }}
      >
        <IonList inset={true}>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Minggu");
            }}
          >
            <IonLabel>Hari Minggu</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Senin");
            }}
          >
            <IonLabel>Hari Senin</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Selasa");
            }}
          >
            <IonLabel>Hari Selasa</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Rabu");
            }}
          >
            <IonLabel>Hari Rabu</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Kamis");
            }}
          >
            <IonLabel>Hari Kamis</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Jum'at");
            }}
          >
            <IonLabel>Hari Jum'at</IonLabel>
          </IonItem>
          <IonItem
            button={true}
            onClick={() => {
              setSelectSchedule("Sabtu");
            }}
          >
            <IonLabel>Hari Sabtu</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </>
  );
};

export default SemuaHariPage;
