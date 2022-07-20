import "./styles.css";

export default class App extends Component{
  texto=() => {
    return <h1>Praticando Arrow Function</h1>
  }
  dobro=(x) => {
    return x*2
  }
  render(){
    return(
      <>
      {this.texto()}
      <h2>{this.dobro(6)}</h2>
      </>
    )
  }
} 