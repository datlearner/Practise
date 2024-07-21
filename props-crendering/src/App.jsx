import AdminDashboard from "./Admin.jsx"
import Greeting from "./Greeting.jsx"
import UserStatus from "./UserStatus.jsx"
function App() {

  return (
    <>
     <AdminDashboard name="kundai" age= {27} isStudent = {true} />
     <AdminDashboard name="john doe" age = {33} isStudent = {false} />
     <AdminDashboard name="bianca" />
     <Greeting name="Kundai" />
     <Greeting name="John Joe" />
     <UserStatus isLoggedIn = {false} />
    </>
  )
}

export default App
