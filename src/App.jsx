import AppRoutes from "./Routes"
import { DataProvider } from './context/DataContext'
import Notification from './components/Notification'
function App() {
  return (
    <DataProvider>
      <Notification/>
      <AppRoutes />
    </DataProvider>

  )
}

export default App
