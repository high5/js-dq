var React = require('react');
var BattleStore = require('../stores/BattleStore');
var Deck = require('./Deck.react');


var DeckList = React.createClass({

  getInitialState: function() {
    return {deckList: this.props.deckList};
    /*
    return {
      deckList: BattleStore.getDeckList()
    };
    */
  },

  componentDidMount: function() {
    BattleStore.addChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    var deckList = this.state.deckList.map(function(deck){
      return <Deck  key={deck.key} info={deck} />;
    });

    return (
      <div id="deck">
        {deckList}
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState({deckList: BattleStore.getDeckList2()});
  }

});

module.exports = DeckList;
