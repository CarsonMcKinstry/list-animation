import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import goat from './assets/goat.jpg';

class Card extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      topOffset: null
    }
  }

  componentDidMount() {
    this.getCardOffset();
  }

  isActive() {
    const { active } = this.props;

    if (active) {
      return "card active"
    }

    return "card";
  }

  getCardOffset() {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      topOffset: rect.top
    });
  }

  render() {

    const { delay = 0, onClick, active } = this.props;
    const styles = {
      animationDelay: `${delay * 0.1}s`
    }

    if (active) {
      // styles.transform = `translateY(-${this.state.topOffset}px)`;
      styles.top = 0;
    }

    return (
      <div 
        className={this.isActive()}
        style={styles}
        onClick={ onClick }
      >
        <div className="image-container" style={{
          backgroundImage: `url(${goat})`
        }}/>
        <div className="card-actions">
          <h2 className="card-title">Goat</h2>
          <div className="button-row">
            <p>It's a goat</p>
          </div>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis, hic quas sunt, est aspernatur distinctio, a autem esse eligendi tempore dolor. Accusantium tempore mollitia quisquam maiores aliquam facilis eum!</p>
        </div>
      </div>
    );
  }

}

Card.propTypes = {
};

export default Card;