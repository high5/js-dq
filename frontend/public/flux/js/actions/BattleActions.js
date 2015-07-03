var AppDispatcher = require('../dispatcher/AppDispatcher');
var BattleConstants = require('../constants/BattleConstants');

var BattleActions = {

  executeAttack: function() {
    AppDispatcher.dispatch({
      actionType: BattleConstants.BATTLE_ATTACK
    });
  }
};

module.exports = BattleActions;
