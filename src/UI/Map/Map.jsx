import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Map.module.css'

export default function Map() {
  return (
    <div>
        <div className={styles.zero} >
            <Link to="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" 
                className={styles.first}></Link>

            <Link to="https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&utm_medium=mapframe&utm_source=maps&z=12" 
                className={styles.second} ></Link>

            <iframe src="https://yandex.by/map-widget/v1/-/CCUZ74DqoD" title='map' frameBorder="1" allowFullScreen={true} className={styles.third}>

            </iframe>
        </div>
    </div>
  )
}
