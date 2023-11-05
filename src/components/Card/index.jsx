import React from 'react'
import styles from './style.module.css'

const Slider = ({ activeCarouselImage }) => {
  return (
    <>
      {
         <img className={styles.SliderCardImage} src={activeCarouselImage} alt="sliderImage"/>
      }
    </>
  )
}

export default Slider