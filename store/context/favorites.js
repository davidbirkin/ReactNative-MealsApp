import {createContext, useState} from 'react'

export const FavoritesCtx = createContext({
  ids: [],
  addFavorite: (id) => {
  },
  removeFavorite: (id) => {
  },
})

const FavoritesProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id) => {
    setFavoriteMealIds(currentFaves => [...currentFaves, id])
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds(currentFaves => currentFaves.filter(mealId => mealId !== id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return (
    <FavoritesCtx.Provider value={value}>
      {children}
    </FavoritesCtx.Provider>
  )
}

export default FavoritesProvider;