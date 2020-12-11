function PortfolioDetails(props){ 
    return(
        <div>
        <h1>{props.project.name}</h1>
        <p>Language:{props.project.language}</p>
        <p>Difficulty:{props.project.difficulty}</p>
        <p>Completed:{props.project.completed}</p>
        </div>
    )
}

export default PortfolioDetails;