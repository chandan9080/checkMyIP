import './App.css'
import React, { useState } from 'react'
import { Button } from '@material-ui/core'
function App() {
  const [detail, setDetail] = useState('')
  const geologicalData = () => {
    fetch(
      'https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3',
    )
      .then((response) => response.json())
      .then((user) => setDetail(user))
    console.log(detail)
  }
  return (
    <div className="App">
      <h2>Check Your IP</h2>
      <Button
        className="btn"
        variant="contained"
        color="secondary"
        onClick={geologicalData}
      >
        Check Location
      </Button>
      {detail && (
        <div>
          <h3>
            Location :
            {`${detail.city}, ${detail.state}, ${detail.country_name}`}
          </h3>
          <h3>IP Address :{`${detail.IPv4}`}</h3>
        </div>
      )}
    </div>
  )
}

export default App
