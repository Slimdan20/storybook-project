import React from 'react'
import Project from './Component/Project'
import ImageOne from './assets/apple-watch.jpg'
import ImageTwo from './assets/headphone.jpg'
import ImageThree from './assets/game-pad.jpg'

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap"}}>
      <Project
         image={ImageOne}
         name="Smart watch"
         description="Stylish and versatile smartwatch designed to keep you connected and on track."
         price="$500" 
         bgColor="rgb(40, 71, 40)"  
      />

      <Project
         image={ImageTwo}
         name="Head phone"
         description="Premium wireless headphones delivering immersive sound and all-day comfort"
         price="$300" 
         bgColor="rgb(30, 113, 190)"
      />

       <Project
         image={ImageThree}
         name="Game pad"
         description="Ergonomic game pad designed for precision control and an enhanced gaming experience"
         price="$700"  
         bgColor="rgb(114, 6, 114)"
      />
    </div>
  )
}

export default App
