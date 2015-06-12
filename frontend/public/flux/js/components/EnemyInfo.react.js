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

    var imgPath = "/images/enemy/" + this.props.info.charaId  + ".png"


    console.log( this.props);
    console.log( this.props.info.name);

    var meterPerStyle = {
      width: this.props.info.lifePer + '%'
    };

    return (
      <table className="enemy-table" onClick={this._onClick}>
        <tr><td><img id={"enemy-img-" + this.props.info.key} className="enemy-img" src={imgPath}   /></td></tr>
        <tr><td className="enemy-meter-td"><div id={"enemy-life-meter-container-" + this.props.info.key} className="meter red nostripes"><span id={"enemy-life-meter-" + this.props.info.key} style={meterPerStyle}></span></div></td></tr>
      </table>
    );
  },

  _onSave: function(text) {

  },


  _onClick: function(event) {
    console.log(event.target);
    console.log('DeckInfo_onClick');
  }


});

module.exports = EnemyInfo;

