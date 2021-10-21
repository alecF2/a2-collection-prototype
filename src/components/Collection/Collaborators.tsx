import styles from './Collaborators.module.scss'

const Collaborators = () => {
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
