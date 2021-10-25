import styles from './Collaborators.module.scss'

import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../interfaces'

interface Props {
  setAuthor: Dispatch<SetStateAction<IUser | undefined>>
}

const Collaborators = ({ setAuthor }: Props) => {
  return (
    <section id={styles.container}>
      <div>
        <label htmlFor="collaborators">Collaborators</label>
        <div>
          <label htmlFor="emailCheck">Send email?</label>
          <input type="checkbox" name="emailCheck" id="emailCheck" checked />
        </div>
      </div>
      <textarea name="collaborators" id="collaborators" placeholder="Emails, or Usernames"></textarea>
    </section>
  )
}

export default Collaborators
