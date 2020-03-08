import {v4 as uuidv4} from "uuid"
import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE, SEARCH } from "../actions/types"

const initialState = [
    {
        id: uuidv4(),
        title: "Rambo 4",
        image:"https://fr.web.img6.acsta.net/medias/nmedia/18/36/26/82/18869492.jpg",
        year: 2014,
        rating: 5
      },
      {
        id: uuidv4(),
        title: "the fall",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSEljyQOqy4iGGg52gcXApAFgErAg_p4-IvHdKVCOeDo0pkYQf",
        year: 2019,
        rating: 4
      },
      {
        id: uuidv4(),
        title: "the evil cult",
        image: "https://i.pinimg.com/originals/91/da/20/91da20f178af4b5cb6109e60570c60fe.jpg",
        year: 1993,
        rating: 3
      }
]

const MovieReducer = (state=initialState, action) => {
    switch(action.type){
      case ADD_MOVIE:
        return [...state, action.payload]
      case EDIT_MOVIE:
        return state.map(el => el.id === action.payload.id ? action.payload : el)
      case DELETE_MOVIE:
        return state.filter(el => el.id !== action.payload)
      case SEARCH:
        return initialState.filter(el => el.rating >= action.payload.rating && el.title.includes(action.payload.keyword.toUpperCase().trim()))
      default:
          return state
    }
}

export default MovieReducer