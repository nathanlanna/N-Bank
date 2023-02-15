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
              <div><span>Saldo</span><p>R$ {this.state.saldo}</p></div>

              <div ><span>Rendimento</span><p>R$ {this.state.rendimento}</p></div>
            </div>
        </main>
        <footer className='rodape'>
            <Button tipo='Sacar'></Button>
            <Button tipo='Depositar'></Button>
        </footer>
      </div>
    );
  }
}

class Button extends React.Component{
  constructor(props){
    super (props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(tipo){
    tipo = this.props;
    console.log(tipo);
      if(tipo.value==='Sacar'){
        console.log('dinheiro sacado');
      } else{
        console.log('dinheiro depositado');
      };

  };

  render(){
    return <button className='btn-botao' onClick={this.handleClick}>{this.props.tipo}</button>
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
