import React from 'react'
import useWindowPosition from '../../hooks/PositionActivity/useWindowPositon'
import ActivityCard from './ActivityCard'
function ListActivity(props) {
    const checked = useWindowPosition("header")
        const activityCards = props.characters.map((card)=>{
            return(
            <ul xyz="fade-100% down duration-10"  key={card.id}>
              <div className='square xyz-in'>
                <ActivityCard
                id={card.id}
                title={card.name}
                image={card.image}
                species={card.species}/>
              </div>
             </ul> 
        )})
  
  return (
    <div className='z-10 pt-5'>
      {checked &&<div className='flex gap-24 flex-wrap'>
        {activityCards}
      </div>
    }
    </div>
  )
}

export default ListActivity