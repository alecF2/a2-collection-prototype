import styles from './AddOrCreateItem.module.scss'

const AddOrCreateItem = () => {
  return (
    <section id={styles.container}>
      <button>Add an Existing Item</button>
      <button>Create a new Item</button>
    </section>
  )
}

export default AddOrCreateItem
