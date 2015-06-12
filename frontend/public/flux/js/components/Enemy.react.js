var React = require('react');
var BattleStore = require('../stores/BattleStore');
var EnemyInfo = require('./EnemyInfo.react');


var Enemy = React.createClass({

  getInitialState: function() {
    return BattleStore.getEnemyList();
  },


  /**
   * @return {object}
   */
  render: function() {

    var enemyList = this.state;

    var enemyInfoList = [];

    for (var key in enemyList) {
      enemyInfoList.push(<EnemyInfo  key={key} info={enemyList[key]} />);
    }

    return (
      <div id="enemy" className="enemy">
        <div id="enemy-list">
          {enemyInfoList}
        </div>
      </div>
    );
  },

  _onSave: function(text) {

  }


});

module.exports = Enemy;
