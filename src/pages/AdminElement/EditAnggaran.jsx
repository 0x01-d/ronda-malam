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
} from "@ionic/react";
import { useEffect } from "react";
let a = 0;

function AnggaranPage({ isOpen, setIsOpen }) {
  const [totalAnggaran, setTotalAnggaran] = useState(100001);
  let externalAnggaranValue = 100002;
  function toRupiah(total) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(total).replace("IDR", "").split(".")[0];
  }
  function handleSimpanButton() {
    a++;
    // handle double click
    if (a % 2 == 0) return;
    let _totalAnggaran = externalAnggaranValue;
    let pengurangan = Number(
      document.getElementById("input-pengurangan").value
    );
    let penambahan = Number(document.getElementById("input-penambahan").value);
    _totalAnggaran += isNaN(penambahan) ? 0 : penambahan;
    _totalAnggaran -= isNaN(pengurangan) ? 0 : pengurangan;
    externalAnggaranValue = _totalAnggaran;
    setTotalAnggaran(Number(_totalAnggaran));
  }
  useEffect(() => {
    // handle DOM failed rendering
    document.addEventListener("click", function (e) {
      if (e.target.id == "simpan-anggaran") return handleSimpanButton();
      if (e.target.innerText == "Tutup" || e.target.innerText == "TUTUP") {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Anggaran</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>Tutup</IonButton>
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
          label="Anggaran Terpakai (pengurangan)"
          labelPlacement="floating"
          maxlength={20}
          counter={true}
          id="input-pengurangan"
          type="number"
          counterFormatter={(inputLength, maxLength) =>
            `${maxLength - inputLength} characters remaining`
          }
        ></IonInput>
        <IonButton
          color="success"
          size="medium"
          id="simpan-anggaran"
          onClick={() => alert()}
        >
          Simpan
        </IonButton>
        <div style={{ padding: "20px" }} />
        Angggaran Terkumpul
        <h1>Rp.{toRupiah(totalAnggaran)}</h1>
      </IonContent>
    </IonModal>
  );
}

export default AnggaranPage;
