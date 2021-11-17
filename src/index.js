import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from '@intility/bifrost-react'
import { faHome, faUser, faCog, faSearch, faVoteYea } from '@fortawesome/free-solid-svg-icons'


// include bifrost css bundle
import '@intility/bifrost-react/dist/bifrost-app.css'

const App = () => (
  <Nav
    appName='Kantine'
    top={
      <>
        <a href='/search' title='Search'>
          <Nav.Item icon={faSearch} />
        </a>
        <a href='/Profile' title='Profile'>
          <Nav.Item icon={faUser} />
        </a>
        <a href='/about'>
          <Nav.Item>About</Nav.Item> 
        </a>
      </>
    }
    side={
      <>
        <a href='/'>
          <Nav.Item icon={faHome}>Home</Nav.Item>
        </a>
        <a href='/settings'>
          <Nav.Item icon={faCog}>Settings</Nav.Item>
        </a>
        <a href='/request'>
          <Nav.Item icon={faVoteYea}>Forslag Til Mat</Nav.Item>
        </a>
      </>
    }
  >

  </Nav>
)

ReactDOM.render(<App />, document.getElementById('root'))
