import AddOrCreateItem from '../components/Collection/AddOrCreateItem'
import Collaborators from '../components/Collection/Collaborators'
import CurrentCollectionItems from '../components/Collection/CurrentCollectionItems'
import Description from '../components/Collection/Description'
import LanguageAndNameInput from '../components/Collection/LanguageAndNameInput'
import PublicCheck from '../components/Collection/PublicCheck'

import styles from './Collection.module.scss'

import { ELanguage, ICollection, IVocab } from '../interfaces'

import { useState, useEffect, MouseEvent } from 'react'
import axios from 'axios'

function Collection() {
  const [lang, setLang] = useState<ELanguage>()
  const [name, setName] = useState<string>("")
  const [authorName, setAuthorName] = useState<string>("")
  const [authorEmail, setAuthorEmail] = useState<string>("")
  const [items, setItems] = useState<IVocab[]>()
  const [description, setDescription] = useState<string>("")

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    // form not complete, leave
    if (!name || !authorName || !authorEmail || !lang || !items || !description) return

    console.log("running");

    const collection: ICollection = {
      author: {
        email: {
          address: authorEmail
        },
        name: authorName,
        rank: 3, // default to creator for now
        id: "" // ID will get assigned on server
      },
      description,
      items,
      lang,
      name,
      id: "", // ID will get assigned on server
    }
    // this won't work until the backend is implemented

    try {
      const response = axios.post("/insert_collection", collection)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    localStorage.clear()
    setAuthorEmail("")
    setAuthorName("")
    setDescription("")
    setItems(undefined)
    setLang(undefined)
    setName("")
  }
  
  useEffect(() => {
    const data = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")!) : {}
    if (data.name) setName(data.name)
    if (data.lang) setLang(data.lang)
    if (data.authorName) setAuthorName(data.authorName)
    if (data.authorEmail) setAuthorEmail(data.authorEmail)
    if (data.items) setItems(data.items)
    if (data.description) setDescription(data.description)
  }, [])

  useEffect(() => {
    const data = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")!) : {}
    data.name = name ?? undefined
    data.lang = lang ?? undefined
    data.authorName = authorName ?? undefined
    data.authorEmail =  authorEmail ?? undefined
    data.items = items ?? undefined
    data.description = description ?? undefined

    localStorage.setItem("state", JSON.stringify(data))
  }, [name, lang, authorName, authorEmail, items, description])

  return (
    <main id={styles.container}>
      <div id={styles.row1}>
        <LanguageAndNameInput name={name} setName={setName} lang={lang} setLang={setLang} />
        <div>
          <PublicCheck />
          <Collaborators authorName={authorName} setAuthorName={setAuthorName} authorEmail={authorEmail} setAuthorEmail={setAuthorEmail} />
        </div>
      </div>
      <hr />
      <div id={styles.row2}>
        <AddOrCreateItem />
        <Description description={description} setDescription={setDescription} />
      </div>
      <hr />
      <CurrentCollectionItems items={items} setItems={setItems} />
      <div id={styles.submitRow}>
        <button onClick={handleSubmit}>Finish Collection Creation</button>
      </div>
    </main>
  )
}

export default Collection
