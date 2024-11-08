import { AppProvider } from '@channel.io/bezier-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PickDate from './pages/PickDate'
import SetTime from './pages/SetTime'
import InputField from './pages/InputField'

// import { isMobile } from './utils/userAgent'

function App() {
  return (
    <AppProvider>
      {/* <div style={{ padding: isMobile() ? '16px' : '0 24px 24px 24px' }}> */}
      <div style={{ padding: '0 24px 24px 24px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/appointment-create" element={<PickDate />} />
            <Route path="/appointment-create/set-time" element={<SetTime />} />
            <Route path="/appointment-create/input-field" element={<InputField />} />
            <Route path="/appointment-check" element={<SetTime />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App;
