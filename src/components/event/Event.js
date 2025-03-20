import Button from './Button'
import styles from './Event.module.css'

function Event({ number }) {

    var numberCounter = 0

    function count() {
        console.log(`Counter: ${numberCounter}`)
        numberCounter += 1
    }

    function showNumber() {
        console.log(`Number: ${number}`)
    }

    return (
        <div className={styles.eventContainer}>
            <p>Click to active event</p>
            <Button event={count} text='First event' />
            <Button event={showNumber} text='Second event' />
        </div>
    )
}
export default Event