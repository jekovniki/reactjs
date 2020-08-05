import React from 'react'
import Header from './components/header'
import styles from './App.module.css'
import Aside from './components/aside'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Aside />
      </div>
    </div>
  )
}

export default App
