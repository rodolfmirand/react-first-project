import styles from './Event.module.css'

function Event({ number }) {

    function myEvent() {
        console.log(`Activated. Number: ${number}`)
    }

    return (
        <div className={styles.eventContainer}>
            <p>Click to active event</p>
            <button onClick={myEvent}>Click here!</button>
        </div>
    )
}
export default Event