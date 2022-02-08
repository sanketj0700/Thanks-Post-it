import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../styles/Home.css';
import AddButton from './AddButton';
import SearchBar from './SearchBar';
import Loading from './Loading';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";
import axios from 'axios';


export default withAuthenticationRequired( function Home(props) {
  const [cards, setCards] = useState([ ]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const { user, error, getIdTokenClaims } = useAuth0();
  const [peopleOptions, setPeopleOptions] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(user);
  const url = process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it-backend.herokuapp.com' : 'http://localhost:5000';
  // on first load get all cards
  useEffect(() => {
    getIdTokenClaims().then((e)=>{
       
      //store token in local storage
      localStorage.setItem('token', e.__raw);

      const config = {
        mode: 'cors',
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
      //get all cards
      axios.get(`${url}/message/read`, config).then(res => {
        setCards(res.data.data);
      });

      // get people options
      axios.get(`${url}/user/`, config).then(res => {
        setPeopleOptions(res.data.data);
      })

      // set user in database
      const obj = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        given_name: user.given_name,
        family_name: user.family_name,
      }
      axios.post(`${url}/user/`, obj, config).then(res => {
        console.log(res.data);
        setLoggedInUser(res.data.user[0]);
        localStorage.setItem('user', JSON.stringify(res.data.user[0]));
      });
    });


  }, []);


  const helpSearch = (card) => {
    return (
      card.author.given_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.dedicated.map(person=>person.given_name).toString().toLowerCase().includes(searchTerm.toLowerCase())||
      card.badges.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  else if(user === loggedInUser){
    return <Loading />
  }

  return (
    <>
    <SearchBar  onChange={(e) => {setSearchTerm(e.target.value)}}/>
    <div className='home-container'>
      {cards.filter((card) => {
          if (searchTerm === "") {
              return card;
          } else if(helpSearch(card)) {
              return card;
          }
          return null;
      }).map(card => (
        <Card key={card._id} card = {card} user = {loggedInUser} peopleOptions = {peopleOptions}/>
      ))}
    </div>
     <AddButton cards = {cards} setCards = {setCards} loggedInUser = {loggedInUser} peopleOptions = {peopleOptions}/>
     </>
  );
}, {
  onRedirecting: () => (<Loading />)
});
