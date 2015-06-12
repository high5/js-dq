var React = require('react');
var BattleStore = require('../stores/BattleStore');
var Enemy = require('./Enemy.react');


var EnemyList = React.createClass({


  getInitialState: function() {

    console.log("EnemyList getInitialState");



    return {enemyList: this.props.enemyList};

  },

  componentDidMount: function() {
    BattleStore.addChangeListener(this._onChange);
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

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState({enemyList: BattleStore.getEnemyList2()});
  }

});

module.exports = EnemyList;
