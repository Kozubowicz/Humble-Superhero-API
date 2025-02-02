import { createContext, useContext, useEffect, useState } from 'react';

const HeroesContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useHeroesContext() {
  return useContext(HeroesContext);
}

// eslint-disable-next-line react/prop-types
export function HeroesContextProvider({ children }) {
  const [heroesList, setHeroesList] = useState(undefined);
  const [postFlag, setPostFlag] = useState(false);

  //Downloads heroes list on beginning, or when post flag is changed
  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('http://localhost:3000/superheroes');
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        setHeroesList(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    load();
  }, [postFlag]);

  //Handling adding new hero
  const addNewHero = async (name, superPower, humilityScore) => {
    const newHero = {
      name,
      superPower,
      humilityScore,
    };

    try {
      const response = await fetch('http://localhost:3000/superheroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHero),
      });

      if (!response.ok) {
        throw new Error();
      }
      setPostFlag((prev) => !prev); //changing flag triggers update
      return true;
    } catch (error) {
      console.error('Error adding a new hero');
      return false;
    }
  };

  return (
    <HeroesContext.Provider value={{ heroesList, addNewHero }}>
      {children}
    </HeroesContext.Provider>
  );
}
