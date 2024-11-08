import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@channel.io/bezier-react/styles.css'

createRoot(document.getElementById('root')).render(<App />)
