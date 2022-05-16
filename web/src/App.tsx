import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <Link to="/employees">Employees</Link> |{" "}
        <Link to="/departments">Departments</Link> |{" "}
        <Link to="/createemployee">CreateEmployee</Link> |{" "}
        <Link to="/createdepartment">CreateDepartment</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
