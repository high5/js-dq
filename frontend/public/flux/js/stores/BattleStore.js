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
    _enemyList = [
      {
        "key":1,
        "charaId":3,
        "name":"テスト１",
        "lifePer":65
      },
      {
        "key":2,
        "charaId":2,
        "name":"テスト２",
        "lifePer":98
      },
      {
        "key":3,
        "charaId":3,
        "name":"テスト２",
        "lifePer":70
      }
    ];
    return _enemyList;
  },

  getEnemyList2: function() {
    _enemyList = [
      {
        "key":1,
        "charaId":3,
        "name":"テスト１",
        "lifePer":65
      },
      {
        "key":2,
        "charaId":3,
        "name":"テスト２",
        "lifePer":30
      },
      {
        "key":3,
        "charaId":3,
        "name":"テスト２",
        "lifePer":70
      }
    ];
    return _enemyList;
  },



  getDeckList: function() {
    _deckList = [
      {
        "key":1,
        "charaId":1,
        "name":"テスト１",
        "lifePer":65,
        "skillPer":20
      },
      {
        "key":2,
        "charaId":2,
        "name":"テスト２",
        "lifePer":98,
        "skillPer":38
      },
      {
        "key":3,
        "charaId":3,
        "name":"テスト3",
        "lifePer":70,
        "skillPer":45
      },
      {
        "key":4,
        "charaId":4,
        "name":"テスト１",
        "lifePer":65,
        "skillPer":20
      },
      {
        "key":5,
        "charaId":5,
        "name":"テスト２",
        "lifePer":98,
        "skillPer":38
      },
      {
        "key":6,
        "charaId":6,
        "name":"テスト3",
        "lifePer":70,
        "skillPer":45
      }
    ];
    return _deckList;
  },

  getDeckList2: function() {
    _deckList = [
      {
        "key":1,
        "charaId":1,
        "name":"テスト１",
        "lifePer":80,
        "skillPer":13
      },
      {
        "key":2,
        "charaId":2,
        "name":"テスト２",
        "lifePer":65,
        "skillPer":11
      },
      {
        "key":3,
        "charaId":3,
        "name":"テスト3",
        "lifePer":40,
        "skillPer":0
      },
      {
        "key":4,
        "charaId":4,
        "name":"テスト１",
        "lifePer":65,
        "skillPer":20
      },
      {
        "key":5,
        "charaId":5,
        "name":"テスト２",
        "lifePer":98,
        "skillPer":38
      },
      {
        "key":6,
        "charaId":6,
        "name":"テスト3",
        "lifePer":70,
        "skillPer":45
      }
    ];
    return _deckList;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }


});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  //var text;

  switch(action.actionType) {
    case BattleConstants.BATTLE_ATTACK:
      BattleStore.emitChange();
      break;
    default:
    // no op
  }


});

module.exports = BattleStore;
