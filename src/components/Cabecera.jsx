import { useEffect, useState } from 'react';
import IconMoon from './iconMoon';
import Sun from './iconSun';
const Cabecera = () =>{

  const InicialStateTheme = localStorage.getItem("theme") === "dark";

  const [darkTheme, setDarkTheme] = useState(InicialStateTheme);

  useEffect(() => {
      if (darkTheme) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark") 
      }
      else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light") 
      }
  }, [darkTheme])
    return(
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl font-medium tracking-[0.3em] ">
            TODO
          </h1>
          <button onClick={()=> setDarkTheme(!darkTheme)}>
            {
              darkTheme ? <Sun/> : <IconMoon/>
            }
          </button>
        </div>
        
      </header>
    )
}
export default Cabecera;