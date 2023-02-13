import React from 'react';
import './App.css';
import "./reset.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saldo: 0,
      rendimento: 0
    }
  }
  render() {
    return (
      <div className='container'>
        <header className='cabecalho'>
          <span>CONTA</span>
          <h1>N-Bank</h1>
        </header>
        <main className='dados'>
            <input className='valor' placeholder='Digite o valor desejado:'></input>
            <div className='valores'>
              <div><span>Saldo</span><p>{this.state.saldo}</p></div>

              <div ><span>Rendimento</span><p>{this.state.rendimento}</p></div>
            </div>
        </main>
        <footer className='rodape'>
          <div className='botoes'>
            <Button tipo='Sacar'></Button>
            <Button tipo='Depositar'></Button>
          </div>
        </footer>
      </div>
    );
  }
}

class Button extends React.Component{
  constructor(props){
    super (props)
  }
  render(){
    return <button>{this.props.tipo}</button>
  }
}
function App() {
  return (
    <div className="App">
      <Layout></Layout>

    </div>
  );
}

export default App;
