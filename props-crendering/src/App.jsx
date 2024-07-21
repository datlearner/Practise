import AdminDashboard from "./Admin.jsx"
function App() {

  return (
    <>
     <AdminDashboard name="kundai" age= {27} isStudent = {true} />
     <AdminDashboard name="john doe" age = {33} isStudent = {false} />
    </>
  )
}

export default App
