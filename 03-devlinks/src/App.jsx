import "./App.css"

import Links from "../components/links/Links"
import Perfil from "../components/Profile/perfil"
import Switch from "../components/switch/Switch"
import SocialLinks from "../components/socialLinks/SocialLinks"
import Rodape from "../components/rodape/Rodape"

const App = () => {
  return (
  <div id="App" className="">
   <Perfil />
   <Switch />
   <ul>
   <Links/>
   <Links/>
   <Links/>
   <Links/>
   </ul>

   <div id="socialLinks">
    <SocialLinks/>
    <SocialLinks/>
    <SocialLinks/>
    <SocialLinks/>
   </div>
   <Rodape/>
  </div>
  )
}

export default App