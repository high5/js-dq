var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BattleConstants = require('../constants/BattleConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _battleState = {};
var _enemyList = {};

var BattleStore = assign({}, EventEmitter.prototype, {

  setBattleState: function(battleState) {
    _battleState = battleState;
  },

  getEnemyList: function() {
    _enemyList = {
      0:{
        "count":123,
        "name":"テスト１",
        "result":false
      },
      1:{
        "count":456,
        "name":"テスト２",
        "result":true
      }
    };

    return _enemyList;
  }
















});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
});

module.exports = BattleStore;
