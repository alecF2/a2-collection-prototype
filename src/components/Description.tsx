import styles from './Description.module.scss'

const Description = () => {
  return (
    <section id={styles.container}>
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" placeholder="Information about the collection"></textarea>
    </section>
  )
}

export default Description
