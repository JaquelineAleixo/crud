import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="app">  
      <aside className="appAside">
        <img className="banner" src="/imagens/banner.png" alt="Banner principal da página"/>
      </aside>

      {/* Lado direito com o conteúdo */}
      <main className="appMain">
        <header>
          BR Close
        </header>
        <div>
        <h1>Faça seu login</h1>
        <form>
          <label>Selecione sua agência:
          <select>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Minas Gerais</option>
            <option>Bahia</option>
          </select></label>
          <input type="text" placeholder="Usuário" /><br/>
          <input type="password" placeholder="Senha" /><br/>
          <a href="/">Esqueci minha senha</a><br/>
          <button className="btn">Entrar</button>

          
        </form>

       
</div>
      <footer>
        <p>2023 - Itaú Private Bank. All rights reserved.&nbsp;&nbsp;&nbsp; Privacy Policy</p>
      </footer>
      </main>
     

    </div>
  );
}

export default App;
