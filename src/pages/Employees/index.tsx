import { useState } from "react"
import { EmployeesCard } from "../../components/EmployeesCard"

export function EmployeesPage() {
  const [employee, setEmployeesCard] = useState<string[]>([
    'Employee 1'
  ])
  function createEmployee() {
    setEmployeesCard([...employee, 'Employee 5'])
  }

  return (
    <div>
      <h1>Employees Page</h1>
      {employee.map(employee => {
        return <EmployeesCard name={employee} />
      })}

    </div>
  )
}