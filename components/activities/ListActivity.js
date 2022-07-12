import React from 'react'
import ActivityCard from './ActivityCard'

function ListActivity(props) {
  
        const activityCards = props.characters.map((card)=>{
            return <ActivityCard 
            key={card.id}
            id={card.id}
            title={card.name}
            image={card.image}
            species={card.species}
            />
            
        })
  
  return (
    <div>
        <ul className='flex gap-24 flex-wrap'>
          {activityCards}
        </ul>
    </div>
  )
}

export default ListActivity