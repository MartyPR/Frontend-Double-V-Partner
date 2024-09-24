import React, { createContext, useState, useEffect } from 'react';
import { getDeseados, saveDeseados } from '../services/storage';

export const DeseadosContext = createContext();

export const DeseadosProvider = ({ children }) => {
  const [deseados, setDeseados] = useState([]);

  useEffect(() => {
    const cargarDeseados = async () => {
      const productosGuardados = await getDeseados();
      if (productosGuardados) {
        setDeseados(productosGuardados);
      }
    };
    cargarDeseados();
  }, []);

  const agregarDeseado = (producto) => {
    const nuevosDeseados = [...deseados, producto];
    setDeseados(nuevosDeseados);
    saveDeseados(nuevosDeseados);
  };

  const eliminarDeseado = (id) => {
    const nuevosDeseados = deseados.filter(producto => producto.id !== id);
    setDeseados(nuevosDeseados);
    saveDeseados(nuevosDeseados);
  };

  return (
    <DeseadosContext.Provider value={{ deseados, agregarDeseado, eliminarDeseado }}>
      {children}
    </DeseadosContext.Provider>
  );
};
