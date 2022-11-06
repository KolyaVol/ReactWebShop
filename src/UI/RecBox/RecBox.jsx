import React from 'react'
import { useState } from 'react'
import styles from './RecBox.module.css'

export default function RecBox() {
    let [rec, setRec] = useState([
        {id: 1, img: '123', bgc: 'blue'},
        {id: 2, img: '321', bgc: 'pink'},
        ])
  return (
    <div>
        <div className={styles.reccomend__box}>
            {rec.map(p =>
                <div key={p.id + 'recBox'} backGroundColor={p.bgc} className={styles.recommend}></div>
                )}
        </div>
    </div>
  )
}
