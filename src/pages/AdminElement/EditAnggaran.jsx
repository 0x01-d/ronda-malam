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
  IonAlert,
} from "@ionic/react";
import { useEffect } from "react";
import db from "../../database";

function toRupiah(total) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(total).replace("IDR", "").split(".")[0];
}
function AlertElement({ isOpen, setIsOpen, deskripsi }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonAlert
        isOpen={isOpen}
        header="Deskripsi"
        subHeader="--------------------"
        message={deskripsi}
        buttons={["OK"]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </>
  );
}

function HistoryAnggaran({ isOpen, setIsOpen, data }) {
  let exampleData = [
    {
      jumlah: 100001,
      deskripsi: "Dana pertama dari developer",
      status: "penambahan",
    },
    {
      jumlah: 41589,
      deskripsi: "Dana digunakan untuk membeli Kopi Kapal Api. lol",
      status: "pengurangan",
    },
  ];

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
        {console.log(data)}
        {data.map((val) => {
          return (
            <>
              <IonItem
                detail={true}
                color={val.status == "pengurangan" ? "light" : ""}
              >
                <IonLabel>
                  <h3>Rp.{toRupiah(val.jumlah)}</h3>
                  <p id="lihat-deskripsi">{val.deskripsi}</p>
                </IonLabel>
              </IonItem>
            </>
          );
        })}
      </IonContent>
    </IonModal>
  );
}

let a = 0;
function AnggaranPage({ isOpen, setIsOpen }) {
  const [totalAnggaran, setTotalAnggaran] = useState(
    db.getValueAnggaran() || 0
  );
  const [openHistory, setOpenHistory] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertDeskripsi, setAlertDeskripsi] = useState("");
  const [historyData, setHistoryData] = useState(db.getHistoryAnggaran());
  let externalAnggaranValue = 0;

  function onloadHistoryData() {
    let data = db.getHistoryAnggaran();
    setHistoryData(data);
  }

  function handleTambahAnggaran() {
    a++;
    // handle double input
    if (a % 2 == 0) return;
    let _totalAnggaran = externalAnggaranValue;
    let penambahan = Number(document.getElementById("input-penambahan").value);
    let desc = document.getElementById("deskripsi-input-penambahan").value;
    _totalAnggaran += isNaN(penambahan) ? 0 : penambahan;
    externalAnggaranValue = _totalAnggaran;
    setTotalAnggaran(Number(_totalAnggaran));
    db.simpanJumlahAnggaran(penambahan, "penambahan", desc);
    onloadHistoryData();
  }
  function handleKurangiAnggaran() {
    a++;
    // handle double input
    if (a % 2 == 0) return;
    let _totalAnggaran = externalAnggaranValue;
    let pengurangan = Number(
      document.getElementById("input-pengurangan").value
    );
    let desc = document.getElementById("deskripsi-input-pengurangan").value;
    _totalAnggaran -= isNaN(pengurangan) ? 0 : pengurangan;
    externalAnggaranValue = _totalAnggaran;
    setTotalAnggaran(Number(_totalAnggaran));
    db.simpanJumlahAnggaran(pengurangan, "pengurangan", desc);
    onloadHistoryData();
  }
  useEffect(() => {
    // handle DOM failed rendering
    document.addEventListener("click", function (e) {
      console.log(e.target.id);
      if (e.target.id == "lihat-deskripsi") {
        // console.log(e.target.innerText);
        setAlertDeskripsi(e.target.innerText);
        setAlertOpen(true);
      }
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
      <HistoryAnggaran
        isOpen={openHistory}
        setIsOpen={setOpenHistory}
        data={historyData}
      />
      <AlertElement
        isOpen={alertOpen}
        setIsOpen={setAlertOpen}
        deskripsi={alertDeskripsi}
      />
    </IonModal>
  );
}

export default AnggaranPage;
