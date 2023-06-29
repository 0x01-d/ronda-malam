import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const SearchPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Search</IonTitle>
      </IonToolbar>
    </IonHeader>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      Search content
    </div>
  </>
);

export default SearchPage;
