import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/button';
import Image from 'next/image';

const Category = ({params}) => {

  console.log(params)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See more"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/17115827/pexels-photo-17115827/free-photo-of-sztuka-statua-blekitne-niebo-rzezba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Main image"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See more"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/17115827/pexels-photo-17115827/free-photo-of-sztuka-statua-blekitne-niebo-rzezba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Main image"
          />
        </div>
      </div>
    </div>
  )
}

export default Category
