import  femaleProfile from "./images/femaleProfile.jpg"
import  maleProfile  from "./images/maleProfile.jpg"
const Cards = (props) => {
    let employeeData = props.employeeData;
    let selectedTeam = props.selectedTeam;
    let handleCardClick = props.handleCardClick;
    console.log(employeeData);
    console.log(selectedTeam);
    return ( 
        <div className="grid">
            {employeeData.map( (employee) => {
                return (
                    <div onClick = {event =>{ console.log(event.target.id); return handleCardClick(event.target.id) } }key = {employee.id} id = {employee.id}className= { employee.teamName == selectedTeam ? "mycard highlight" : " mycard"}>
                    <img src = {(employee.gender === "female" ? femaleProfile : maleProfile)}></img> 
                    <h1>{employee.fullName}</h1>
                    <p>{employee.designation}</p>
                    </div>
                )
            })}
        </div>
    )
    
}
export default Cards;