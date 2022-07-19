import "./styles.css";

export default class App extends Component{
  mensagem=() => {
    return <h1>Praticando Arrow Function</h1>
  }
  dobro=(x) => {
    return x*2
  }
  render(){
    return(
      <>
      {this.mensagem()}
      <h2>{this.dobro(5)}</h2>
      </>
    )
  }
} 