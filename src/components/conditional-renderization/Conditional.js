import { useState } from 'react'
import styles from './Conditional.module.css'

function Conditional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail(){
        setUserEmail('')
    }

    return (
        <div className={styles.conditionalContainer}>
            <h1>Register e-mail</h1>
            <form>
                <input
                    type="email"
                    placeholder="Type your e-mail"
                    onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={sendEmail}>Send</button>
                {userEmail && (
                    <div>
                        <p>User e-mail is: {userEmail}</p>
                        <button onClick={clearEmail}>Clear e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Conditional