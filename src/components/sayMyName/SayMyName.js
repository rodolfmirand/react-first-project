import styles from './SayMyName.module.css'

function SayMyName(props) {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent} >
                - Now... Say my name.
                <br></br>
                - {props.name}.
                <br></br>
                - You're goddamn  right.
            </p>
        </div>
    )
}
export default SayMyName