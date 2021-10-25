import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="add_items">Add items</Link>
      <br />
      <Link to="add_collection">Add collection</Link>
    </div>
  )
}

export default Home
