import styles from './LanguageAndNameInput.module.scss'

const LanguageAndNameInput = () => {
  return (
    <section id={styles.container}>
      <div>
        <label htmlFor="language">Collection Language</label>
        <select name="language" id="language">
          <option value="">Select a Language</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Collection Name</label>
        <input type="text" name="name" id="name" placeholder="Nombre" />
      </div>
    </section>
  )
}

export default LanguageAndNameInput
