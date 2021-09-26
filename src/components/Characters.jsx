import React, { useEffect, useReducer, useState, useMemo } from 'react'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([])

  const [state, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, [])

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  const handleSearch = event => {
    setSearch(event.target.value)
  }
  // const filteredUsers = characters.filter(user => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(
    () =>
      characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )
  return (
    <div className='Characters'>
      {state.favorites &&
        state.favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      <div className='Search'>
        <input type='text' value={search} onChange={handleSearch} />
      </div>
      {filteredUsers &&
        filteredUsers.map(c => (
          <div className='card' key={c.id}>
            <img src={c.image} alt='' />
            <h2>{c.name}</h2>
            <p>Status: {c.status}</p>
            <p>Specie: {c.species}</p>
            <button type='button' onClick={() => handleClick(c)}>
              Add favorites
            </button>
          </div>
        ))}
    </div>
  )
}

export default Characters
