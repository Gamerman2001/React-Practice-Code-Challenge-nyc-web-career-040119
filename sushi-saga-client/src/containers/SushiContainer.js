import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  let sushiLi = props.sushi.map((sushi)=> {
      let name = sushi.name
      let img_url = sushi.img_url
      let price = sushi.price
      let id = sushi.id
      return <div><Sushi name={name} img_url={img_url} price={price} id={id} /></div>
    })
    console.log(sushiLi)


  return (
    <Fragment>
      <div className="belt">
        { 
          
        //rendering sushi here
        
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer