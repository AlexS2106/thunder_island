import { useState, useEffect } from "react";

import useRecipes from "./useRecipes.query";
import { filterList, today } from "../functions/utility";
import { recipesOfMonday, recipesOfTuesday, recipesOfWednesday, recipesOfThursday, recipesOfFriday, recipesOfSaturday, recipesOfSunday } from "../types/indices";

const useRecipesOfToday = () => { 
  const [ recipesList, setRecipesList ] = useState( [] );

  const recipes = useRecipes();
  const day = today();

  useEffect(() => {
    setRecipesList(filterList(getDaysRecipes(day), recipes));
  }, [day, recipes]);

function getDaysRecipes(day) {
  switch ( day ) { 
    case "Monday":
      return recipesOfMonday;
    case "Tuesday":
      return recipesOfTuesday;
    case "Wednesday":
      return recipesOfWednesday;
    case "Thursday":
      return recipesOfThursday;
    case "Friday":
      return recipesOfFriday;
    case "Saturday":
      return recipesOfSaturday;
    case "Sunday":
      return recipesOfSunday;
    default:
      return [];
};
};

return recipesList;

};

export default useRecipesOfToday;