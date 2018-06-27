import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
    const petCards = props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={props.onAdoptPet}/>
    })
    return <div className="ui cards">{petCards}</div>
}

export default PetBrowser
