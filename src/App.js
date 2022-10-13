import useDatabase from './hooks/useDatabase'

const App = () => {

  const [data, isLoaded] = useDatabase("vaccinaties")

  const renderList = () => {
    return(
      <pre>
        { JSON.stringify(data) }
      </pre>
    )
  }

  return(
    <div>
      <h1>Info</h1>
      { isLoaded && renderList() }
    </div>
  )


}
export default App;
