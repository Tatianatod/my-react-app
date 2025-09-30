//import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <p className="card-title">{props.country}</p>
            <p className="card-weight">{props.weight}</p>
        {props.children}
        </div>
    );
}
/*
Card.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    weight: PropTypes.number,
}
*/
export default Card