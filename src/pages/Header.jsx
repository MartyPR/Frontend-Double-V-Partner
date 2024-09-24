import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tienda en línea</IonTitle>
        <IonButtons slot="end">
          <Link to="/productos">
            <IonButton>Productos</IonButton>
          </Link>
          <Link to="/deseados">
            <IonButton>Deseados</IonButton>
          </Link>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
