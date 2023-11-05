import styles from './style.module.css'
import React, { useState } from 'react'

const Dots = ({ data , findDotImage}) => {
   const [dotMenu,setDotMenu] = useState(false)
   const [dotItemFirst,setDotItemFirst] = useState(0)
   const [dotItemLast,setDotItemLast] = useState(4)

    let sendDotId = (id) => {
        findDotImage(id)
    }
    let dataLength = data.length

    let handleRight = () => {
        if (dotItemLast === dataLength) {
          setDotItemFirst(0);
          setDotItemLast(4);
        } 
        setDotItemFirst((last) => last + 1);
        setDotItemLast((last) => last + 1);
    }

    let handleLeft = () => {
        if(dotItemFirst === 0) {
          setDotItemFirst(dataLength - 4);
          setDotItemLast(dataLength);
        }
        setDotItemFirst((last) => last - 1);
        setDotItemLast((last) => last - 1);
    }
      
  return (
    <div className={`${dotMenu ? styles.dotsBodyActive : styles.dotsBodyNoactive}`} onMouseEnter={() => setDotMenu(true)} onMouseLeave={() => setDotMenu(false)}
    >
        {dotMenu ? <img className={styles.arrow} onClick={handleLeft} src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="arrow"/> :  <></>} 
        
        {
            data.slice(dotItemFirst,dotItemLast).map((item) => (
                    dotMenu  ? 
                      <div className={styles.dotItemMain}><img key={item.id} onClick={() => sendDotId(item.id)} className={styles.dotitem} src={item.img} alt="err" /></div> 
                      :
                      <div key={item.id} className={styles.dotItemNoHover}></div> 
            ))
        }

        {dotMenu ? <img className={styles.arrow} onClick={handleRight} src="https://www.shareicon.net/data/512x512/2015/12/06/683324_arrows_512x512.png" alt="arrow" /> :  <></>} 
    </div>
  )
}

export default Dots