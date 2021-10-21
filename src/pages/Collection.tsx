import AddOrCreateItem from '../components/Collection/AddOrCreateItem'
import Collaborators from '../components/Collection/Collaborators'
import CurrentCollectionItems from '../components/Collection/CurrentCollectionItems'
import Description from '../components/Collection/Description'
import LanguageAndNameInput from '../components/Collection/LanguageAndNameInput'
import PublicCheck from '../components/Collection/PublicCheck'

import styles from './Collection.module.scss'

function Collection() {
  return (
    <main id={styles.container}>
      <div id={styles.row1}>
        <LanguageAndNameInput />
        <div>
          <Collaborators />
        </div>
      </div>
      <hr />
      <div id={styles.row2}>
        <AddOrCreateItem />
        <Description />
      </div>
      <hr />
      <CurrentCollectionItems />
      <button>submit</button>
    </main>
  )
}

export default Collection
