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
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

  enableButtonSubmit = () => {
    const maxAttr = 90;
    const maxTotal = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    if (cardName && cardDescription && cardImage
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
      <= maxTotal && cardAttr1 <= maxAttr && cardAttr1 >= 0
      && cardAttr2 <= maxAttr && cardAttr2 >= 0
      && cardAttr3 <= maxAttr && cardAttr3 >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

    changeState = ({ target }) => {
      const { id } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [id]: value }, this.enableButtonSubmit);
    };

    render() {
      return (
        <>
          <div>
            <h1>Tryunfo</h1>
          </div>
          <Form
            { ...this.state }
            onInputChange={ this.changeState }
          />
          <Card
            { ...this.state }
          />
        </>
      );
    }
}

export default App;
