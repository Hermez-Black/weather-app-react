import { SpinnerCircularFixed } from 'spinners-react';

export default function Loader() {
  return (
    <div className='loader'>
        <img src="/6.svg" alt="" />
        <h1 style={{color: 'white', padding: 10}}>
          Weather App
        </h1>
        <SpinnerCircularFixed
          size={70}
          thickness={120}
          secondaryColor={'white'}
          color={'grey'}/>
    </div>
  )
}
