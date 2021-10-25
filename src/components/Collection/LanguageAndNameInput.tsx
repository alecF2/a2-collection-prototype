import styles from './LanguageAndNameInput.module.scss'

import { Dispatch, SetStateAction } from 'react'
import { ELanguage, IVocab } from '../../interfaces'

interface Props {
  setLanguage: Dispatch<SetStateAction<ELanguage | undefined>>
  setName: Dispatch<SetStateAction<string>>
}

const LanguageAndNameInput = ({ setLanguage, setName }: Props) => {
  return (
    <section id={styles.container}>
      <div>
        <label htmlFor="language">Collection Language</label>
        {/* @ts-ignore */}
        <select name="language" id="language" onChange={e => setLanguage(1)}>
          <option value="">Select a Language</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Collection Name</label>
        <input type="text" name="name" id="name" placeholder="Nombre" onChange={e => setName(e.target.value)} />
      </div>
    </section>
  )
}

export default LanguageAndNameInput
