import { connect } from 'react-redux';
import Card from './Card';
import styles from './Favorites.module.css';
import { filterCards, orderCards } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Favorites(props) {
   const dispatch = useDispatch();

   // eslint-disable-next-line no-unused-vars
   const [aux, setAux] = useState(false); 
   
   const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
 }

   return (
   <div className={styles.Cards} >
   <select onChange={handleOrder} >
   <option value="A">Ascendente</option>
   <option value="D">Descendente</option>
   </select>

   <select onChange={handleFilter}>
   <option value="Male">Male</option>
   <option value="Female">Female</option>
   <option value="Genderless">Genderless</option>
   <option value="unknown">unknown</option>
   <option value="allCharacters">allCharacter</option>
   </select>   

        {
         props.myFavorites.map((character) => {
            return <Card 
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            />
         })

      }
   </div>

   )
}

const mapStateToProps = (state) => {
    return {
       myFavorites : state.myFavorites
    }
 }


export default connect(
    mapStateToProps,
    null
    )(Favorites);