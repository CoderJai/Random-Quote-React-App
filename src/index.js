import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
class App extends React.Component {
  state = {
    quotes: null,
    randomQuote: null
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data.quotes
        });
      });
  }

  randomQuoteHandler = () => {
    const randNumb = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randNumb];

    this.setState({
      randomQuote
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Quote of the Day</div>
        <div className="card-body">
          <div className="App">
            {this.state.randomQuote !== null && this.state.randomQuote.quote}
          </div>
          <div className="author">
            {this.state.randomQuote !== null && this.state.randomQuote.author}
          </div>
          <br />
          <button onClick={this.randomQuoteHandler}>
            Click For A Random Quote
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
