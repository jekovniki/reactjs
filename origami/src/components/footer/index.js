import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()
    return (
        <div className={styles['container-footer']}>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="footer" />
                    )
                })
            }
            <p>From Software University</p>
        </div>
    )
}

export default Footer
