import React, { useState } from "react";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonToast,
  IonProgressBar,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
} from "@ionic/react";

import EditAnggaranPage from "./AdminElement/EditAnggaran";

function ToastElement({ toastOpen, setToastOpen }) {
  return (
    <IonToast
      isOpen={toastOpen}
      message="Data berhasil di tambahkan"
      onDidDismiss={() => setToastOpen(false)}
      duration={2000}
    ></IonToast>
  );
}
function Form() {
  const [toastOpen, setToastOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  function handleProgress() {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setToastOpen(true);
    }, 2000);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Page</IonTitle>
          {showLoading && (
            <IonProgressBar type="indeterminate"></IonProgressBar>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={handleProgress}>
          Open
        </IonButton>
        <ToastElement toastOpen={toastOpen} setToastOpen={setToastOpen} />
      </IonContent>
    </IonPage>
  );
}

function AdminPage() {
  const [openAnggaranPage, setOpenAnggaranPage] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true}>
          <IonItem>
            <IonBadge slot="end">22</IonBadge>
            <IonLabel>Edit User Harian</IonLabel>
          </IonItem>
          <IonItem>
            <IonBadge slot="end" color="warning">
              101
            </IonBadge>
            <IonLabel>Edit Lokasi Ronda</IonLabel>
          </IonItem>
          <IonItem>
            <IonBadge slot="end" color="danger">
              88
            </IonBadge>
            <IonLabel onClick={() => setOpenAnggaranPage(true)}>
              Edit Anggaran
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <EditAnggaranPage
        isOpen={openAnggaranPage}
        setIsOpen={setOpenAnggaranPage}
      />
    </IonPage>
  );
}
export default AdminPage;
