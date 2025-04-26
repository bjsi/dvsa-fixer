import { useState, useEffect } from 'react'
import './App.css'
import WebcamView from './components/WebcamView'

function App() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:4545/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <h1>Webcam App</h1>
      
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <WebcamView />
        <p style={{ marginTop: '1rem' }}>
          Backend status: {message || 'Loading...'}
        </p>
      </div>
    </div>
  )
}

export default App
