import { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { callToast, getAxios, makeEndpoint } from './utils/utils';
import Loader from './components/Loader';
import Button from './components/Button';
import Card from './components/Card';

import axios from 'axios';

/*
  Desarrolla una aplicación que muestre datos del clima, obteniendo de la API los
  siguientes datos: país, ciudad, icono que describa el clima, la temperatura en grados
  centígrados, y un botón que cambie la temperatura a grados Fahrenheit.

  Criterios de evaluación:
  ● Los datos del clima dependen de la ubicación del usuario (3pts).
  ● Correcto despliegue de datos: país, ciudad, icono que describa el clima, temperatura en
  grados centígrados. (3pts).
  ● Botón que cambia de grados centígrados a fahrenheit y viceversa (1pts).
  ● Hacer que se muestre el icono correspondiente al clima (2 pts).
  ● Es una aplicación frontend, así que, debe ser un diseño entendible (1pts).

  Retos opcionales
  ● Hacer un modo obscuro
  ● Hacer una pantalla de carga.
  ● Incluir un input que permita buscar el clima en ciudades especificas.
*/


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      getAxios(makeEndpoint(position.coords?.latitude, position.coords?.longitude), (res) => {
        setDataWeather(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    }, (error) => {
      console.error("Hubo un problema al intentar traer tus cordenadas", error);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <h1 style={{color: 'white', marginTop: '10%'}}>Weather App</h1>
      <Card />
      {/* <Toaster
        position='top-center'/> */}
      {/* <button onClick={callToast}>toast</button> switch to dark mode*/}
      <Button />
    </div>
  );
}

export default App;