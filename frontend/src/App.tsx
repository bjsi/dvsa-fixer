import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import WebcamView from './components/WebcamView'
import SMSVerification from './components/SMSVerification'
import { AuthProvider, useAuth } from './context/AuthContext'

const AppContent: React.FC = () => {
  const { isPhoneVerified } = useAuth()
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:4545/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <h1>DVSA Fixer</h1>
      
      {!isPhoneVerified ? (
        <SMSVerification />
      ) : (
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <WebcamView />
          <p style={{ marginTop: '1rem' }}>
            Backend status: {message || 'Loading...'}
          </p>
        </div>
      )}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
