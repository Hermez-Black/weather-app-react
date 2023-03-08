import { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { callToast, getAxios, makeEndpoint } from './utils/utils';
import Loader from './components/Loader';
import Card from './components/Card';

import axios from 'axios';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataWeather, setDataWeather] = useState({});
  const [degrees, setDegrees] = useState(0);
  const [isCelsius, setIsCelsius] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getAxios(makeEndpoint(position.coords?.latitude, position.coords?.longitude), (res) => {
        setDataWeather(res.data);
        setDegrees(res?.data?.main?.temp);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    }, (error) => {
      alert("Hubo un problema al intentar traer tus cordenadas, concede el permiso por favor");
    });
    console.log(dataWeather);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const changeDegrees = () => {
    setIsCelsius(!isCelsius);
    if (!isCelsius) {
      setDegrees(parseInt((degrees - 32) * (5/9)));
      return;
    }
    setDegrees(dataWeather?.main?.temp);
  }

  return (
    <div className="app">
      <h1 style={{color: 'white', marginTop: '10%'}}>Weather App</h1>
      <Card data={dataWeather} degreesNumber={degrees} />
      {/* <Toaster
        position='top-center'/> */}
      {/* <button onClick={callToast}>toast</button> switch to dark mode*/}
      <div className="space">
        <input onClick={changeDegrees} className="buttonChange" type="button" value={isCelsius ? "Cambiar a F*" : "Cambiar a C*"} />
      </div>
    </div>
  );
}

export default App;