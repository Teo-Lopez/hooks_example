import React from 'react'
import { usePokeData } from '../hooks/customHooks'
import { Card, Button } from 'react-bootstrap'

const PokedexWithCustomHook = (props) => {
  //Custom hooks allow to reuse existing logic, like the one in Pokedex component
  const [name, img] = usePokeData(props)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
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

export default PokedexWithCustomHook
