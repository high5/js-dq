/**
 * Created on 15/06/11.
 */
/**
 * Created on 15/06/10.
 */
var React = require('react');
var BattleActions = require('../actions/BattleActions');

window.$ = window.jQuery = require('jquery');

var velocity = require('velocity-animate');

var Enemy = React.createClass({

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

    //console.log( this.props);
    //console.log( this.props.info.name);

    var meterPerStyle = {
      width: this.props.info.lifePer + '%'
    };

    return (
      <table className="enemy-table" >
        <tr><td><div className="enemy-wrap" ><img value="sssssssssss" id={"enemy-img-" + this.props.info.key} className="enemy-img" src={imgPath} onClick={this._onClick}  /><img id={"enemy-effect-attack-img-" + this.props.info.key} className="enemy-effect-attack-img" src="/images/effect/enemy/attack.png"   /></div></td></tr>
        <tr><td className="enemy-meter-td"><div id={"enemy-life-meter-container-" + this.props.info.key} className="meter red nostripes"><span id={"enemy-life-meter-" + this.props.info.key} style={meterPerStyle}></span></div></td></tr>
      </table>
    );
  },

  _onSave: function(text) {

  },


  _onClick: function(event) {

    var key = event.target.id.replace("enemy-img-", "");
    //console.log(effectId);

    //$("#enemy-effect-attack-img-" + key).show();
    $("#enemy-effect-attack-img-" + key).velocity("fadeIn", { duration: 300 });
    BattleActions.executeAttack();
    $("#enemy-effect-attack-img-" + key).velocity("fadeOut", { duration: 400 })
    //$("#enemy-effect-attack-img-" + key).velocity({ top: 100 , left:100 }, 1000 , "swing");


    //$("#enemy-effect-attack-img-1").hide();

    //
    //console.log('enemy._onClick');
  }


});

module.exports = Enemy;

