function Person({name, age, occupation, image}) {
    return (
        <div>
            <img id="person-image" src={image} alt={name}></img>
            <h2>Name: {name}</h2>
            <p>Idade: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    )
}
export default Person