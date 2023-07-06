// favoritesReducer.js
const initialState = {
  moviesList: [], // Initialize moviesList as an empty array
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        moviesList: [...state.moviesList, action.payload], // Add the new movie to the moviesList
      };
    // Handle other actions

    default:
      return state;
  }
};

export default favoritesReducer;
