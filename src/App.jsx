import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  persona from './assets/persona.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="app"> 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
          
  <div class="flex flex-col-reverse  w-[80%] ">
  <div class="flex flex-row   ">
  <div class="iamgen h-[32rem]  w-[32rem] "  >
    <img src={persona} alt="" />
  </div>

</div>





  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[100%]">01</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[100%]">02</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[100%]">03</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[100%]">conocimientos

  <br/>
  
  </div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[600px]">05</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[600px]">06</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[600px]">07</div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[600px]">Apellido
  <br/>
  <p>Snchez Gomez </p>

  </div>


  <div class="size-16 bg-violet-500 mt-6 mb-8 w-[600px]">Nombre
  <br/>
  <p>Manuel Sanchez </p>
  </div>


  
</div>
</div>
</div>

      
    </>
  )
}

export default App
