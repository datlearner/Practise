import AdminDashboard from "./Admin.jsx"
import Greeting from "./Greeting.jsx"
function App() {

  return (
    <>
     <AdminDashboard name="kundai" age= {27} isStudent = {true} />
     <AdminDashboard name="john doe" age = {33} isStudent = {false} />
     <AdminDashboard name="bianca" />
     <Greeting name="kunda" />
    </>
  )
}

export default App
