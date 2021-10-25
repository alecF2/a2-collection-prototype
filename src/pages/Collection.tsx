import AddOrCreateItem from '../components/Collection/AddOrCreateItem'
import Collaborators from '../components/Collection/Collaborators'
import CurrentCollectionItems from '../components/Collection/CurrentCollectionItems'
import Description from '../components/Collection/Description'
import LanguageAndNameInput from '../components/Collection/LanguageAndNameInput'
import PublicCheck from '../components/Collection/PublicCheck'

import styles from './Collection.module.scss'

import { ELanguage, ICollection, IUser, IVocab } from '../interfaces'

import { useState, useEffect } from 'react'

export interface ICollectionPlus extends ICollection {
  name: string
}

function Collection() {
  const [language, setLanguage] = useState<ELanguage>()
  const [name, setName] = useState<string>("")
  const [author, setAuthor] = useState<IUser>()
  const [items, setItems] = useState<IVocab[]>()

  useEffect(() => {
    // console.log(ELanguage.english)
    console.log({ name, language })
  }, [name, language])

  return (
    <main id={styles.container}>
      <div id={styles.row1}>
        <LanguageAndNameInput setName={setName} setLanguage={setLanguage} />
        <div>
          <PublicCheck />
          <Collaborators setAuthor={setAuthor} />
        </div>
      </div>
      <hr />
      <div id={styles.row2}>
        <AddOrCreateItem />
        <Description />
      </div>
      <hr />
      <CurrentCollectionItems />
      <div id={styles.submitRow}>
        <button>Finish Collection Creation</button>
      </div>
    </main>
  )
}

export default Collection
