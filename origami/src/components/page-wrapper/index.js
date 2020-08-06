import React from 'react'
import Header from '../../components/header'
import styles from './index.module.css'
import Aside from '../../components/aside'
import Footer from '../../components/footer'

const PageWrapper = (props) => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles['inner-container']}>
        { props.children }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageWrapper