import AdminDashboard from "./Admin.jsx"
import Greeting from "./Greeting.jsx"
import UserStatus from "./UserStatus.jsx"
import Product from "./Product.jsx"
function App() {

  return (
    <>
     <AdminDashboard name="kundai" age= {20} isStudent = {true} />
     <AdminDashboard name="john doe" age = {33} isStudent = {false} />
     <AdminDashboard name="bianca" />
     <Greeting name="Kundai" />
     <Greeting name="John Joe" />
     <UserStatus isLoggedIn = {true} />
     <UserStatus isLoggedIn = {false} />
     <Product name = "macbook" price = {`$1500`} />
    </>
  )
}

export default App
