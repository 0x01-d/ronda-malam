import React from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { warning } from "ionicons/icons";

const MisiPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Misi dan Visi</IonTitle>
      </IonToolbar>
    </IonHeader>

    <div style={{ padding: "2px" }} />

    <IonItem>
      <IonLabel class="ion-text-wrap">
        Ronda malam ikut berkontribusi dalam pengamanan lingkungan sekitar dari
        tindakan yang merugikan orang lain. antara lain :{" "}
        <IonText color="danger">
          kehilangan uang, kehilangan kendaraan, maling, tuyul, babi ngepet dan
          lain sebagainya
        </IonText>
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel class="ion-text-wrap">
        ronda akan di kelompokan berdasarkan jumlah warga di sekitar dan akan di
        bagi setiap malam minimal 5 orang
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel class="ion-text-wrap">
        Anggaran akan di pungut dari warga sekitar. jumlah akan di rundingkan
        terlebih dulu. Anggaran akan di gunakan per malam berdasarkan rundingan.
        Akan di gunakan untuk membeli kopi, senter, pentungan, dll. Anggaran
        yang berlebih, akan di gunakan untuk kebutuhan keamanan lainya. misal
        lampu penerangan di area yang gelap. Jika anggaran terlalu banyak akan
        di gunakan untuk membeli CCTV
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel class="ion-text-wrap">
        Anggota yang di tunjuk di malam itu. di wajibkan untuk datang. ketika
        tidak bisa datang, wajib membayar denda rp 50.000 dan di berikan kepada
        si pengganti yang bisa hadir di waktu itu
      </IonLabel>
    </IonItem>
  </>
);

export default MisiPage;
