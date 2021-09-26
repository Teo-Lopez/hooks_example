import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

const getIdFromURL = (url) => url.params.id

const Pokedex = (props) => {
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

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Pokedex
