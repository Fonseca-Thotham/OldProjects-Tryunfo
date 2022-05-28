import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardTrunfo: false,
  };

  changeState = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          onInputChange={ this.changeState }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
