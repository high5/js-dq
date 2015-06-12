var React = require('react');
var BattleStore = require('../stores/BattleStore');
var Enemy = require('./Enemy.react');


var EnemyList = React.createClass({


  getInitialState: function() {
    return {
      enemyList: BattleStore.getEnemyList()
    };

  },

  /**
   * @return {object}
   */
  render: function() {

    //var enemyList = this.state.enemyList;

    //var enemyInfoList = [];

    /*
    var todos = this.state.enemyList.map((todo){
      return <li key={todo.id}><Todo onDelete={this.deleteTodo} todo={todo} /></li>;
    });
    */

    var enemyList = this.state.enemyList.map(function(enemy){
      return <Enemy  key={enemy.pos} info={enemy} />;
    });

    /*
    for (var key in enemyList) {
      enemyInfoList.push(<EnemyInfo  key={key} info={enemyList[key]} />);
    }
    */

    return (
      <div id="enemy" className="enemy">
        <div id="enemy-list">
          {enemyList}
        </div>
      </div>
    );
  },

  _onSave: function(text) {

  }


});

module.exports = EnemyList;
