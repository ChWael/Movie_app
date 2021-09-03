import "./App.css";
import React, {useState} from "react";
import Movie from './componets/Movie';
import Add from './componets/Add';
import NavBar from "./componets/NavBar";






function App() {
  const [movie, setmovie] = useState([{
    id:1,
    title:'Captain America',
    img:'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg',
    rate: '4',
    description:' Action '

  },
{
  id:2,
  title:'The A Team',
  img:'https://upload.wikimedia.org/wikipedia/en/e/e8/A_team_poster_10.jpg',
  rate: '5',
  description:'Action'
},{
  id:3,
  title:'JUMANJI',
  img:'https://fr.web.img4.acsta.net/pictures/19/11/07/12/52/2054035.jpg',
  rate: '5',
  description:'Comedy'
},{
  id:4,
  title:'Doctor strange',
  img:'https://fr.web.img2.acsta.net/pictures/16/09/09/08/57/518191.jpg',
  rate: '4',
  description:' Fantasy '
},{
  id:5,
  title:'The Meg',
  img:'https://poweredbyrobotsblog.files.wordpress.com/2019/12/the-meg.jpg',
  rate: '3',
  description:'Action'
},{
  id:6,
  title:'SAW',
  img:'https://fr.web.img6.acsta.net/pictures/17/10/04/11/04/3025573.jpg',
  rate: '2',
  description:'Horror'
}])

const addMovieHandler = (newMovie) => {
  setmovie([...movie, newMovie])
};

const [search, setSearch] = useState("");
const [rating, setRating] = useState("");
  return (

        <div>
          <NavBar search = {search} setSearch = {setSearch} setRating = {setRating} />
          <Movie movie = {movie} search = {search} rating = {rating}  />
          <Add addMovieHandler = {addMovieHandler} />

        </div>

  )
}

export default App;

