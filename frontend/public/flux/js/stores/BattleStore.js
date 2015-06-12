var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BattleConstants = require('../constants/BattleConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _battleState = {};
var _enemyList = {};
var _deckList = {};

var BattleStore = assign({}, EventEmitter.prototype, {

  setBattleState: function(battleState) {
    _battleState = battleState;
  },

  getEnemyList: function() {
    _enemyList = {
      1:{
        "charaId":1,
        "name":"テスト１",
        "lifePer":65
      },
      2:{
        "charaId":2,
        "name":"テスト２",
        "lifePer":98
      },
      3:{
        "charaId":3,
        "name":"テスト２",
        "lifePer":70
      }
    };
    return _enemyList;
  },

  getDeckList: function() {
    _deckList = {
      1:{
        "charaId":1,
        "name":"テスト１",
        "lifePer":65,
        "skillPer":20
      },
      2:{
        "charaId":2,
        "name":"テスト２",
        "lifePer":98,
        "skillPer":38
      },
      3:{
        "charaId":3,
        "name":"テスト3",
        "lifePer":70,
        "skillPer":45
      },
      4:{
        "charaId":4,
        "name":"テスト１",
        "lifePer":65,
        "skillPer":20
      },
      5:{
        "charaId":5,
        "name":"テスト２",
        "lifePer":98,
        "skillPer":38
      },
      6:{
        "charaId":6,
        "name":"テスト3",
        "lifePer":70,
        "skillPer":45
      }
    };
    return _deckList;
  }


});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
});

module.exports = BattleStore;
