import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './components/Cards';
import Search from './components/search'
function App() {
let [employees , setEmployees]  = useState(
  [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);
  const [selectedTeam , setSelectedTeam] = useState("TeamB");
  const handleTeamChange = (value) => {
    setSelectedTeam(value);
  }
  const handleCardClick = (value) => {
    let newList = employees.map((employee) => {
      console.log(`Hi ${selectedTeam}`);
      if ( employee.id == value && employee.teamName == selectedTeam){
        console.log("Matched");
        employee.teamName = "";
      }
      else if ( employee.id == value && employee.teamName != selectedTeam)
        employee.teamName = selectedTeam;
      return employee;
    })
    setEmployees(newList);
  }
  return (
    <>
    <Search handleTeamChange = {handleTeamChange}/>
    <Cards employeeData = {employees} selectedTeam = {selectedTeam} handleCardClick = {handleCardClick}/>
    </>
  );
}

export default App;
