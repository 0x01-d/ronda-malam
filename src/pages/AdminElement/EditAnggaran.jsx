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
  IonInput,
  IonLabel,
  IonItem,
} from "@ionic/react";
import { useEffect } from "react";

function HistoryAnggaran({ isOpen, setIsOpen }) {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History Angaran</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>Tutup</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem detail={false} color="light">
          <IonLabel>
            <h3>Text Item</h3>
            <p>Detail set to true - detail arrow displays on both modes</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={false}>
          <IonLabel>
            <h3>Text Item 2</h3>
            <p>Detail set to true - detail arrow displays on both modes</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonModal>
  );
}

function AnggaranPage({ isOpen, setIsOpen }) {
  const [totalAnggaran, setTotalAnggaran] = useState(100001);
  const [openHistory, setOpenHistory] = useState(false);
  let externalAnggaranValue = 100002;
  function toRupiah(total) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(total).replace("IDR", "").split(".")[0];
  }
  function handleTambahAnggaran() {
    let _totalAnggaran = externalAnggaranValue;
    let penambahan = Number(document.getElementById("input-penambahan").value);
    _totalAnggaran += isNaN(penambahan) ? 0 : penambahan;
    externalAnggaranValue = _totalAnggaran;
    setTotalAnggaran(Number(_totalAnggaran));
  }
  function handleKurangiAnggaran() {
    let _totalAnggaran = externalAnggaranValue;
    let pengurangan = Number(
      document.getElementById("input-pengurangan").value
    );
    _totalAnggaran -= isNaN(pengurangan) ? 0 : pengurangan;
    externalAnggaranValue = _totalAnggaran;
    setTotalAnggaran(Number(_totalAnggaran));
  }
  useEffect(() => {
    // handle DOM failed rendering
    document.addEventListener("click", function (e) {
      if (e.target.id == "tambah-anggaran") return handleTambahAnggaran();
      if (e.target.id == "kurangi-anggaran") return handleKurangiAnggaran();
      if (e.target.innerText == "Keluar" || e.target.innerText == "KELUAR") {
        setIsOpen(false);
      }
      if (e.target.innerText == "Tutup" || e.target.innerText == "TUTUP") {
        setOpenHistory(false);
      }
      if (e.target.innerText == "Lihat History") {
        setOpenHistory(true);
      }
    });
  }, []);
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Anggaran</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>Keluar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          label="Penambahan Anggaran"
          labelPlacement="floating"
          maxlength={20}
          counter={true}
          id="input-penambahan"
          type="number"
        ></IonInput>
        <IonInput
          label="Deskripsi"
          labelPlacement="floating"
          maxlength={100}
          counter={true}
          id="deskripsi-input-penambahan"
          counterFormatter={(inputLength, maxLength) =>
            `${maxLength - inputLength} characters remaining`
          }
        ></IonInput>
        <IonButton
          color="success"
          size="small"
          id="tambah-anggaran"
          onClick={() => alert()}
        >
          Simpan
        </IonButton>
        <IonInput
          label="Anggaran Terpakai (pengurangan)"
          labelPlacement="floating"
          maxlength={20}
          counter={true}
          id="input-pengurangan"
          type="number"
        ></IonInput>
        <IonInput
          label="Deskripsi"
          labelPlacement="floating"
          maxlength={100}
          counter={true}
          id="deskripsi-input-pengurangan"
          counterFormatter={(inputLength, maxLength) =>
            `${maxLength - inputLength} characters remaining`
          }
        ></IonInput>
        <IonButton
          color="danger"
          size="small"
          id="kurangi-anggaran"
          onClick={() => alert()}
        >
          Simpan
        </IonButton>
        <div style={{ padding: "20px" }} />
        Angggaran Terkumpul
        <h1>Rp.{toRupiah(totalAnggaran)}</h1>
        <div style={{ padding: "20px" }} />
        <IonToolbar color="tertiary">
          <IonTitle>Lihat History</IonTitle>
        </IonToolbar>
      </IonContent>
      <HistoryAnggaran isOpen={openHistory} setIsOpen={setOpenHistory} />
    </IonModal>
  );
}

export default AnggaranPage;
