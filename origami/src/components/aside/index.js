import React from 'react'
import Link from '../link'
import styles from './aside.module.css'

const AsideLink = ({title, href}) => {
    return (
        <Link href={ href } title={ title } type="aside" />
    )
}

const Aside = () => {
    return (
        <aside className={styles.container}>
            <AsideLink href="#" title="Going to 1" />
                <AsideLink href="#" title="Going to 2" />
                <AsideLink href="#" title="Going to 3" />
                <AsideLink href="#" title="Going to 4" />
                <AsideLink href="#" title="Going to 5" />
                <AsideLink href="#" title="Going to 6" />
        </aside>
    )
}

export default Aside
