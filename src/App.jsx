import { useState } from 'react'
import data from './data'
import List from './List'
const App = () => {
  const [people, setPeople] = useState(data)
  const clearItems = () => {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays yesterday</h3>
        <List people={people}></List>
        <button type="button" className="btn btn-block" onClick={clearItems}>
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
