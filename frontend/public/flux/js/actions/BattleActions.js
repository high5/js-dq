var AppDispatcher = require('../dispatcher/AppDispatcher');
var BattleConstants = require('../constants/BattleConstants');

var BattleActions = {

  executeDeckAttack: function() {
    AppDispatcher.dispatch({
      actionType: BattleConstants.BATTLE_DECK_ATTACK
    });
  }
};

module.exports = BattleActions;
