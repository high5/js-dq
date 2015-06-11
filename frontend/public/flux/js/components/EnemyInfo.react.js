/**
 * Created on 15/06/11.
 */
/**
 * Created on 15/06/10.
 */
var React = require('react');

var EnemyInfo = React.createClass({

  getInitialState: function() {
    return null;
  },


  /**
   * @return {object}
   */
  render: function() {

    //console.log(this.props.enemy);
    //console.log(this.props.key);

    var imgPath = "/images/enemy/" + this.props.enemy.enemyId  + ".png"

    var meterPerStyle = {
      width: this.props.enemy.lifePer + '%'
    };

    return (
      <table className="enemy-table">
        <tr><td><img id="enemy-img-1" className="enemy-img" src={imgPath}   /></td></tr>
        <tr><td className="enemy-meter-td"><div id="enemy-life-meter-container-1" className="meter red nostripes"><span id="enemy-life-meter-1" style={meterPerStyle}></span></div></td></tr>
      </table>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = EnemyInfo;

