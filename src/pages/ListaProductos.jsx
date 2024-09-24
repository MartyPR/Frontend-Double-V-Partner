import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../services/api';
import { DeseadosContext } from '../context/DeseadosContext';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const { agregarDeseado } = useContext(DeseadosContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const result = await getProductos();
        setProductos(result.data);
      } catch (error) {
        alert('Error al cargar los productos.');
      }
    };
    fetchProductos();
  }, []);

  return (
    <IonContent>
      <IonList>
        {productos.map(producto => (
          <IonItem key={producto.id}>
            <IonLabel>
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
            </IonLabel>
            <IonButton onClick={() => agregarDeseado(producto)}>Agregar a Deseados</IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ListaProductos;
