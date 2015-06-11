var React = require('react');
var BattleStore = require('../stores/BattleStore');



var Enemy = React.createClass({

  getInitialState: function() {
    return BattleStore.getEnemyList();
  },


  /**
   * @return {object}
   */
  render: function() {

    //console.log(this.props.enemyList);

    var enemyList = this.state;

    console.log(enemyList);


    /*
    var enemyList = this.props.enemyList;

    for (var key in enemyList) {


      console.log(enemyList[key].name);


      //todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }
    */



    var meterPerStyle = {
      width: '50%'
    };



    return (
      <div id="enemy" className="enemy">
      <div id="enemy-list">
        <table className="enemy-table">
          <tr><td><img id="enemy-img-1" className="enemy-img" src="/images/enemy/1.png"   /></td></tr>
          <tr><td className="enemy-meter-td"><div id="enemy-life-meter-container-1" className="meter red nostripes"><span id="enemy-life-meter-1" style={meterPerStyle}></span></div></td></tr>
        </table>
        <table className="enemy-table">
          <tr><td><img id="enemy-img-1" className="enemy-img" src="/images/enemy/1.png"   /></td></tr>
          <tr><td className="enemy-meter-td"><div id="enemy-life-meter-container-1" className="meter red nostripes"><span id="enemy-life-meter-1" style={meterPerStyle}></span></div></td></tr>
        </table>
        <table className="enemy-table">
          <tr><td><img id="enemy-img-1" className="enemy-img" src="/images/enemy/1.png"  /></td></tr>
          <tr><td className="enemy-meter-td"><div id="enemy-life-meter-container-1" className="meter red nostripes"><span id="enemy-life-meter-1" style={meterPerStyle}></span></div></td></tr>
        </table>
      </div>
      </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = Enemy;
