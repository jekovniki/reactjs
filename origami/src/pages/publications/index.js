import styles from './index.module.css'
import PageWrapper from '../../components/page-wrapper'
import React, { Component } from 'react'
import Origam from '../../components/origam'
import Title from  '../../components/title'

class Publications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami')
        const origamis = await promise.json()

        this.setState({
            origamis
        })
    }

    componentDidMount() {
        this.getOrigamis()
    }

    render () {
        const {
            origamis
        } = this.state
        return (
          <PageWrapper>
                <Title title="Publications" />
                <div className={styles["origamis-wrapper"]}><p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p></div>
            </PageWrapper>
        )
    }
}

export default Publications