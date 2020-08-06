import React, { Component } from 'react'
import PageWrapper from '../../components/page-wrapper'
import Title from  '../../components/title'
import styles from './index.module.css'

class Profile extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.getUser()

    }

    getUser = async() => {
        const promise = await fetch(`http://localhost:9999/api/user?id=4`)
        const user = await promise.json()
    }

    render() {
        return (
            <PageWrapper>
                <div>
                    <p>User:</p>
                </div>
                <div className={styles.textcenter}>
                  <Title title="Post 1" />
                  <p>Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.</p>
                </div>
                <div className={styles.textcenter}>
                  <Title title="Post 2" />
                  <p>Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.</p>
                </div>
                <div className={styles.textcenter}>
                  <Title title="Post 3" />
                  <p>Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.Toq ot SoftUni ne struva.</p>
                </div>
            </PageWrapper>
        )
    }
}

export default Profile