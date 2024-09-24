import React, { useContext } from 'react';
import { DeseadosContext } from '../context/DeseadosContext';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const Deseados = () => {
  const { deseados, eliminarDeseado } = useContext(DeseadosContext);

  return (
    <IonContent>
      <IonList>
        {deseados.map(producto => (
          <IonItem key={producto.id}>
            <IonLabel>
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
            </IonLabel>
            <IonButton color="danger" onClick={() => eliminarDeseado(producto.id)}>Eliminar</IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default Deseados;
