import styles from './AddOrCreateItem.module.scss'

import { Link } from 'react-router-dom'

const AddOrCreateItem = () => {
  return (
    <section id={styles.container}>
      <button>Add an Existing Item</button>
      <Link to="/add_items?append=true">
        <button>Create a new Item</button>
      </Link>
    </section>
  )
}

export default AddOrCreateItem
