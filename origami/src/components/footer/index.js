import React from 'react'
import Link from '../link'
import styles from './index.module.css'

const Footer = () => {
    console.log(styles)
    return (
        <div className={styles['container-footer']}>
            <ul>
                <Link href="#" title="Going to 1" type="footer" />
                <Link href="#" title="Going to 2" type="footer" />
                <Link href="#" title="Going to 3" type="footer" />
                <Link href="#" title="Going to 4" type="footer" />
                <Link href="#" title="Going to 5" type="footer" />
                <Link href="#" title="Going to 6" type="footer" />
            </ul>
            <p>From Software University</p>
        </div>
    )
}

export default Footer
