import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addFav, removeFav} from '../redux/actions';
import { useState , useEffect } from 'react';

function Card(props) {
   const [isFav, setisFav] = useState(false);

   const handleFavorite =() => {
      if(isFav) {
         setisFav(false)
         props.removeFav(props.id)
      }
      else {
         setisFav(true)
         props.addFav(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   return (
      <div className={styles.Card} >
         {
            isFav 
            ? (
              <button className={styles.button1} onClick={handleFavorite}>💜</button>
              ) : (
             <button className={styles.button1} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={() => {props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`}>
         <img className={styles.Img} src={props.image} alt='' />
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         </Link>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
}

export const mapStateToProps = (state) => {
   return {
      myFavorites : state.myFavorites
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Card);