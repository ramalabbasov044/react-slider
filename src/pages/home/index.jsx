import SliderCard from '../../components/Card/index'
import Dots from '../../components/Dots/index'
import data from '../../data/slider.json'
import styles from './style.module.css'
import React, { useState , useEffect } from 'react'

const Home = () => {
  const [activeCarouselImage,setActiveCarouselImage] = useState(data[0].img)

  let time = 2000

  let findDotImage = (id) => {
      let acId = data.filter((item) => item.id === id);
      setActiveCarouselImage(acId[0].img)
  }

  return (
    <>
        <div className={styles.sliderBody}>
            <SliderCard activeCarouselImage={activeCarouselImage} />
            <Dots findDotImage={findDotImage} data={data} />
        </div>
    </>
  )
}

export default Home