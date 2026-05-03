

import studentInfo from './studentInfo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <studentInfo fname="hjk" age="20"/>
      <counter/>
    </div>
  )
}

export default App
