import React, { useState, useContext, useEffect } from 'react';

// To avoid useEffect missing dependency error, and to avoid infinite loop,
// set up the useCallback hook down in 'fetchDrinks'
// This says, only if something in the function changes - only if the search param changes,
// then create it from scratch; if it doesn't, then do not create it from scratch.
// (see 8:50:29 in video)
import { useCallback } from 'react';

// Search cocktail by name:
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Set 'a' as default so that drinks with 'a' are shown on the screen as default.
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      //   console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          // Destructure: These variable names come from the API endpoint object:
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      }
      // If cocktails are null (i.e. if nothing appears in search)
      else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();

    // To avoid useEffect missing dependency error,
    // and to avoid infinite loop,
    // we set up the useCallback hook up in 'fetchDrinks',
    // and wrap the entire 'fetchDrinks' function in it -> useCallback(<entire function in here>), [searchTerm].
    // Then here in 'useEffect', add 'fetchDrinks' as our dependency -> [searchTerm, fetchDrinks]
    // The 'useEffect missing dependency error' should now be gone, and we no longer get an infinite loop.
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
