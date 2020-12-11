import {Link} from 'react-router-dom'

function Portfolio(props){
    const portfolioPieces = props.portfolioPieces.map((pieces, idx)=>{
    return <li key={idx}><Link to={`/portfolio/${pieces.id}`}>{pieces.name}</Link></li>  
    })
    return(
        <div>
            {portfolioPieces}
        </div>
    )
}

export default Portfolio;