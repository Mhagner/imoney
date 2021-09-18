import { Router } from 'react-router-dom'

import './global.css'

import Routes from './routes'
import history from './history'

function App() {
  return (
    <Router history={history}>
     <Routes />
    </Router>
  );
}

export default App;
