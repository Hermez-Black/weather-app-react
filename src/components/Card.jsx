import React from 'react'

export default function Card({ data, degreesNumber }) {

  const icon = data?.weather[0]?.icon;


  return (
    <div className='card'>
      <img className='item1' src={`/public/${icon}.svg`} alt="icon weather api" />
      <p className='item2'>{degreesNumber}°</p>
      <div className='item3'>Wind: {data?.wind?.speed}<br/>Clouds: {data?.clouds?.all}<br/>Pressure: {data?.main?.pressure}</div>
      <div className='item4'>{data?.weather[0]?.description}</div>
      <h2 className='item5'>{data?.name}, {data?.sys?.country}</h2>
    </div>
  )
}
