import { useState, useEffect } from 'react'
import axios from 'axios'

export const usePokeData = (props) => {
  const getIdFromURL = (url) => url.params.id
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const fetchPokeData = (id) => axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
  const fillData = (data) => {
    setName(data.pokemon.name)
    setImageUrl(data.sprites.front_default)
  }

  useEffect(() => {
    fetchPokeData(getIdFromURL(props.match))
      .then(res => fillData(res.data))
      .catch(err => console.log(err))
  }, [props.match])

  return [name, imageUrl]
}