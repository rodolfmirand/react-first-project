import styles from './Person.module.css'
import PropTypes from 'prop-types'

function Person({name, age, occupation, image}) {
    return (
        <div className={styles.contentContainer}>
            <img className={styles.image} src={image} alt={name}></img>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    )
}

Person.propTypes = {
    age: PropTypes.number.isRequired
}

export default Person