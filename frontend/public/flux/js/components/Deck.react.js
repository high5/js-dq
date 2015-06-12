var React = require('react');
var BattleStore = require('../stores/BattleStore');
var DeckInfo = require('./DeckInfo.react');


var Deck = React.createClass({

  getInitialState: function() {
    return BattleStore.getDeckList();
  },

  /**
   * @return {object}
   */
  render: function() {

    var deckList = this.state;

    var deckInfoList = [];

    for (var key in deckList) {
      deckInfoList.push(<DeckInfo  key={key} info={deckList[key]} />);
    }

    return (
      <div id="deck">
        {deckInfoList}
      </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = Deck;
