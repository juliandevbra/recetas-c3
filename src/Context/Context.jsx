import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const RecipeStates = createContext();

const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const url = `https://api.spoonacular.com/recipes/rando?number=10&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data.recipes);
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
