/* eslint-disable no-restricted-globals */
import styles from './Detail.module.css';
import axios from "axios";
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Detail() {
   const{ id } = useParams();
   let [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

    return (
   <div className={styles.Card}>
      <img className={styles.Image} src={character.image} alt={character.name} />
   <div className={styles.texto} >
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>Origin: {character.origin ? character.origin.name || "Unknown" : "Unknown"}</h2>
   </div>
   </div>
    );
 }