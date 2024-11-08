import { AppProvider } from '@channel.io/bezier-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PickDate from './pages/PickDate'
import SetTime from './pages/SetTime'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/add-schedule/pick-date" element={<PickDate />} />
          <Route path="/add-schedule/set-time" element={<SetTime />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;
