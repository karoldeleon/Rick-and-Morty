import { useState } from 'react';
import { validation } from '../validation';
import styles from './Form.module.css';
import imagen from '../imagenfondo/9e2ea39d2e18a6104dff1c6029f1f615.jpg';


export default function Form({login}) {

    const [userData, setuserData] = useState({
        email: '',
        password: '',
      });


    const [errors, setErrors] = useState({});  

    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
          });
         
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))  
    }  

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
      }
      


    return (
       <div  className={styles.Form} >
        <form onSubmit={handleSubmit}> 
            <div>
            <img className={styles.image} src={imagen} alt="Imagen del Form" />
            </div>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="text" name="email" placeholder="Escribe tu email..." value={userData.email} 
            onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" name="password" placeholder="Escribe tu Password..." value={userData.password} 
            onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <button className={styles.button} >Submit</button>
        </form>
       </div>
    );
 }