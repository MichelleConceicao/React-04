import "./styles.css";

export default class App extends Component{
  texto=() => {
    return <h1>Praticando Arrow Function</h1>
  }
  triplo=(x) => {
    return x*3
  }
  render(){
    return(
      <>
      {this.texto()}
      <h2>{this.triplo(6)}</h2>
      </>
    )
  }
} 