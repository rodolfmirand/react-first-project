import styles from './Person.module.css'

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
export default Person