import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import ListaProductos from './pages/ListaProductos';
import Deseados from './pages/Deseados';
import { DeseadosProvider } from './context/DeseadosContext';
import Header from './pages/Header';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <DeseadosProvider>
        <Header />
          <IonRouterOutlet>
            <Route exact path="/productos" component={ListaProductos} />
            <Route exact path="/deseados" component={Deseados} />
            <Redirect exact from="/" to="/productos" />
          </IonRouterOutlet>
        </DeseadosProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
