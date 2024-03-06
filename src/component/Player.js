import React from 'react'
import Card from 'react-bootstrap/Card';

function Player(play) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={play.image} />
      <Card.Body>
        <Card.Title>{play.name}</Card.Title>
        <Card.Text>
          {play.Nationality}
          {play.age}
          {play.number}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player;