import styles from './SearchBar.module.css';
import { useState } from 'react';
import {NavLink} from "react-router-dom";

export default function SearchBar({onSearch, setAccess }) {
   let [id, setId] = useState("");

   const  handleLogout = (event) => {
      setAccess(false); 
   }

   const  handleChange = (event) => {
      setId(event.target.value) 
   }


   return (
      <div className={styles.SearchBar}>
         <NavLink to="/about" className={styles.Nav} >About</NavLink>
         <NavLink to="/home" className={styles.Nav} >Home</NavLink>
         <NavLink to="/favorites" className={styles.Nav} >Favorites</NavLink>
         <input className={styles.input}type='search' onChange={handleChange} value={id} placeholder="Enter ID...Max 826" />
         <button className={styles.button} onClick={() => {onSearch(id); setId("")}}>Agregar</button>
         <button className={styles.button1} onClick={handleLogout}>Log Out</button>
      </div>
   );
}
