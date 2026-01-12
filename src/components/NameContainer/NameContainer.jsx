import React from 'react'
import './nameContainer.css'
import { useDayNightStore } from '../../store/dayNightStore'

const NameContainer = () => {
  const isNight = useDayNightStore((state) => state.isNight);

  return (
    <div className={`name-container ${isNight ? "night" : "day"}`}>
      <h1 className="name-container__title">Sint-Jacobskerk</h1>
      <p className="name-container__subtitle">Gent, België</p>
    </div>
  )
}

export default NameContainer