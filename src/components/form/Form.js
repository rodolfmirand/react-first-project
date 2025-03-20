import styles from './Form.module.css'
import { useState } from 'react'

function Form() {

    function registerUser(e) {
        e.preventDefault()
        console.log(`User registred! Name: ${name} | Password: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={styles.formContainer}>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}
export default Form