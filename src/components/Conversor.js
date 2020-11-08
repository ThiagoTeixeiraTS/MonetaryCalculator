import React, { Component } from "react";
import "./Conversor.css";
class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      MoedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    console.log(this.state);

    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=6532341d573e0048dde0`;
    console.log(
      `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=6532341d573e0048dde0`
    );
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[de_para];
        console.log(cotacao);

        let MoedaB_valor = (
          parseFloat(this.state.moedaA_valor) * cotacao
        ).toFixed(2);

        this.setState({ MoedaB_valor });
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        ></input>
        <input type="Button" value="Converter" onClick={this.converter}></input>
        <h2>
          Resultado: {this.state.MoedaB_valor} {this.props.moedaB}
        </h2>
      </div>
    );
  }
}

export default Conversor;
