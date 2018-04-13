import React, {Component} from 'react';
import Card from './Card';

class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: null
    }
  }

  setActiveCard(i) {
    const { active } = this.state;

    this.setState({
      active: active === i ? null : i
    });
  }

  checkIfActive(i) {
    const { active } = this.state;

    return i === active;
  }

  renderCards() {
    const results = [];

    for(let i = 0; i < 10; i++) {
      results.push(
        <Card 
          delay={i}
          onClick={e => this.setActiveCard(i)}
          active={ this.checkIfActive(i)}
        />
      );
    }

    return results;
  }

  activeExists() {
    const { active } = this.state;
    if (active !== null) {
      return "cards active";
    }

    return "cards";
  }

  render() {
    return (
      <div className={this.activeExists()}>
        { this.renderCards() }
      </div>
    );
  }

}

Cards.propTypes = {
};

export default Cards;