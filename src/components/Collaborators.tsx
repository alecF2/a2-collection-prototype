import styles from './Collaborators.module.scss'

const Collaborators = () => {
  return (
    <section id={styles.container}>
      <label htmlFor="collaborators">Collaborators</label>
      <textarea name="collaborators" id="collaborators" placeholder="Emails, or Usernames"></textarea>
      <label htmlFor="emailCheck">Send email?</label>
      <input type="checkbox" name="emailCheck" id="emailCheck" checked />
    </section>
  )
}

export default Collaborators
