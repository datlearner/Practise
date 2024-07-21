import AdminDashboard from "./Admin.jsx"
import Greeting from "./Greeting.jsx"
import UserStatus from "./UserStatus.jsx"
function App() {

  return (
    <>
     <AdminDashboard name="kundai" age= {20} isStudent = {true} />
     <AdminDashboard name="john doe" age = {33} isStudent = {false} />
     <AdminDashboard name="bianca" />
     <Greeting name="Kundai" />
     <Greeting name="John Joe" />
     <UserStatus isLoggedIn = {true} />
    </>
  )
}

export default App
