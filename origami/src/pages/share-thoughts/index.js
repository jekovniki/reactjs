import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-wrapper'
import Title from  '../../components/title'
import SubmitButton from '../../components/button/submit-button'



const ShareThoughtsPage = () => {

    return (
            <PageWrapper>
                <Title title="Share your thoughts" />
                <div className={styles.container}>
                <div>
                <textarea>
                  Publication...
                </textarea>
                </div>
                <div>
                <SubmitButton title="Post" />
                </div>
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

export default ShareThoughtsPage