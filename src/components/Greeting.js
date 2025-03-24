function Greeting({ name }) {

    function greet(someName){
        return `Hello, ${someName}! How're you doing?`
    }

    return (
        <>
            <p>{name && greet(name)}</p>
        </>
    )
}
export default Greeting