import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <Link to="/employees">Employees</Link> |{" "}
        <Link to="/departments">Departments</Link> |{" "}
        <Link to="/create-employees">CreateEmployee</Link> |{" "}
        <Link to="/create-departments">CreateDepartment</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
