var React = require('react');
var BattleStore = require('../stores/BattleStore');
var Deck = require('./Deck.react');


var DeckList = React.createClass({

  getInitialState: function() {
    return {
      deckList: BattleStore.getDeckList()
    };
  },

  /**
   * @return {object}
   */
  render: function() {

    var deckList = this.state.deckList.map(function(deck){
      return <Deck  key={deck.pos} info={deck} />;
    });

    return (
      <div id="deck">
        {deckList}
      </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = DeckList;
