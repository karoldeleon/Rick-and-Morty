import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import styles from './App.module.css';
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';
import Favorites from './components/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
   let [characters, setCharacters] = useState([]);
   // const EMAIL = "kfortuner29@hotmail.com";
   // const PASSWORD = "penelope29";
   
   const [access, setAccess] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();


    async function onSearch(id) {
      try {
        const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        const data = response.data;
    
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('¡No hay personajes con este ID!');
        }
      } catch (error) {
        alert('Ha ocurrido un error');
        console.log(error);
      }
    }

   function onClose(id) {
      setCharacters(
         characters.filter((character) => character.id !== id)
      )
   }


   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const response = await axios.get(URL + `?email=${email}&password=${password}`);
        const { access } = response.data;
        setAccess(response.data);
        access && navigate('/home');
      } catch (error) {
        alert('Ha ocurrido un error al iniciar sesión');
        console.log(error);
      }
    }
  
   useEffect(() => {
      !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

   

   return (
      <div className={styles.App}>
         {location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
         <Route path="/" element={<Form login={login}/>} />
         <Route path="/home" element={<Cards  onClose={onClose} characters={characters} />} />
         <Route path="/about" element={<About/>} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/favorites" element={<Favorites onClose={onClose} />} />
         </Routes>
      </div> 
   );
}
export default App;
