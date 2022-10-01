const Search = (props) => {
    const handleTeamChange = props.handleTeamChange;
    return( 
        <>
        < input className = "search" type = "text" id = "team" onChange={ (event) => handleTeamChange( event.target.value)} placeholder = "Enter the team"/>
        </>
            );
}
export default Search;