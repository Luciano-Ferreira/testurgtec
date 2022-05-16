import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import CreateDepartment from './pages/CreateDepartment'
import CreateEmployee from './pages/CreateEmployee'
import DepartmentsList from './pages/DepartmentList'
import EmployeeList from './pages/EmployeeList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/employees' element={<EmployeeList />} />
          <Route path='/departments' element={<DepartmentsList />} />
          <Route path='/createemployee' element={<CreateEmployee />} />
          <Route path='/createdepartment' element={<CreateDepartment />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
