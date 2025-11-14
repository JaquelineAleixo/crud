import './App.css';
import Banner from './componentes/Banner/Banner';
import Login from './componentes/Login';
import { IoEarthOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

function App() {
  return (
    <div className="app">  
      <aside className="appAside">
        <Banner />  
      </aside>

      {/* Lado direito com o conteúdo */}
      <main className="appMain">
        <header>
          <div className='iconText'> <IoEarthOutline />BR </div>
          <div className='iconText'><GrClose /> Close </div>
        </header>
        <div className="appContent">
        <Login />
        </div>
      <footer>
        <p>2023 - Itaú Private Bank. All rights reserved.&nbsp;&nbsp;&nbsp; Privacy Policy</p>
      </footer>
      </main>
     

    </div>
  );
}

export default App;
