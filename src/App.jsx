import { useState } from 'react'
import tailwindcss from './assets/tailwindcss.jpg'
import viteLogo from '/vite.svg'
import  persona from './assets/persona.jpg'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import js from './assets/js.jpg'
import react from './assets/react.jpg'
import git  from './assets/git.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="app"> 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
          
  <div class="flex flex-col-reverse  w-[80%] ">
  <div class="flex flex-row   ">
  <div class="iamgen   w-[24rem] "  >
    <img className='float-right' src={persona} alt="" />
  </div>

</div>





  

  <div class="size-16  mt-6 mb-8 w-[100%] h-auto  text-2xl text-center  ">conocimientos 

  <br/>

  <div class="grid grid-cols-4 gap-4">
  <div><p class="text-2xl text-center  ">html</p>
  
  <img class="rounded-[9vw] w-[80%] "  src={html} alt="" />
  
  </div>
  <div><p class="text-2xl text-center ">css</p>
  
  <img class="rounded-[9vw] w-[70%] " src={css} alt="" />
  
  </div>
  <div><p class="text-2xl text-center ">js</p>
  
  <img class="rounded-[9vw] w-[80%] " src={js} alt="" />
  
  </div>
  <div><p class="text-2xl text-center ">React</p>
  
  <img class="rounded-[9vw]  w-[80%]" src={react} alt="" />
  
  </div>
  <div><p class="text-2xl text-center ">tailwindcss</p>
  
  <img class="rounded-[9vw] w-[80%] " src={tailwindcss} alt="" />

  </div>


  <div><p class="text-2xl text-center ">Git</p>
  <a href="https://github.com/dashboard">

  <img class="rounded-[9vw] w-[80%] " src={git} alt="" />
  </a>
  

  </div>
</div>

  </div>


  


  <div class="size-16  mt-6 mb-8 w-[600px] text-2xl ">apedisaje
  <br />
  <p class="text-xl text-center">grado 11 ,tecnicgo en sistema</p>


  </div>


  <div class="size-16  mt-6 mb-8 w-[600px] text-2xl ">edad

  <br />
  <p class="text-xl text-center">19 años</p>
  </div>
  


  <div class="size-16  mt-6 mb-8 w-[600px] text-2xl ">Apellido
  <br/>
  <p class="text-xl text-center">Snchez Gomez </p>

  </div>


  <div class="size-16  mt-6 mb-8 w-[600px] text-2xl ">Nombre
  <br/>
  <p class="text-xl text-center">Manuel Sanchez </p>
  </div>


  
</div>
</div>
</div>


      
    </>
  )
}

export default App
