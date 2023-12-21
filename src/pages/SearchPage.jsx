import React, { useState } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
} from "@ionic/react";
import simpleDatabase from "../database/jadwal";

const SearchPage = () => {
  const [searchUser, setSeachUser] = useState([...simpleDatabase]);

  function handleInput(e) {
    const { target } = e;
    const filtered = simpleDatabase.filter((e) =>
      e.name.toLocaleLowerCase().includes(target.value.toLocaleLowerCase())
    );
    setSeachUser(filtered);
  }
  function IfUserNotFound() {
    return (
      <IonItem style={{ gridColumn: "1/ span 2", textAlign: "center" }}>
        <IonLabel>User Not Found</IonLabel>
      </IonItem>
    );
  }

  function Content() {
    return searchUser.map((e, index) => {
      return (
        <IonItem key={index}>
          <IonAvatar aria-hidden="true" slot="start">
            <img
              alt=""
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>{e.name}</IonLabel>
          <IonNote color={"warning"} style={{ fontSize: "0.7rem" }}>
            {e.day}
          </IonNote>
        </IonItem>
      );
    });
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            animated={true}
            placeholder="Username"
            color={"medium"}
            debounce={700}
            onIonInput={(e) => {
              handleInput(e);
            }}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent
        style={{
          height: "100vh",
        }}
      >
        <IonList
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {searchUser.length !== 0 ? <Content /> : <IfUserNotFound />}
        </IonList>
      </IonContent>
    </>
  );
};

export default SearchPage;
