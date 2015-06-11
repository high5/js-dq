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

    //console.log(this.props.enemyList);



    /*
    var enemyList = this.props.enemyList;

    for (var key in enemyList) {


      console.log(enemyList[key].name);


      //todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    */

    var enemyList = this.state;

    var enemyInfoList = [];

    for (var key in enemyList) {
      //enemyInfoList.push(<EnemyInfo key={key} todo={allTodos[key]} />);
      enemyInfoList.push(<EnemyInfo  key={key} enemy={enemyList[key]} />);
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
