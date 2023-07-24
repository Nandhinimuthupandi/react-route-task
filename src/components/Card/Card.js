
import './Card.css'
const Card = (props) => {
    return(
        <div className='card-container'>
          <img style={{width:300}}src={props.item.img}/>
          <h3>{props.item.title}</h3>
          <p>{props.item.description}</p>
        </div>
    )
}

export default Card;