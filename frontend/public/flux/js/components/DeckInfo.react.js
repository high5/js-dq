/**
 * Created on 15/06/11.
 */
/**
 * Created on 15/06/10.
 */
var React = require('react');

var DeckInfo = React.createClass({

  getInitialState: function() {
    return null;
  },

  /**
   * @return {object}
   */
  render: function() {

    var imgPath = "/images/deck/" + this.props.info.charaId  + ".png"

    var lifeMeterPerStyle = {
      width: this.props.info.lifePer + '%'
    };

    var skillMeterPerStyle = {
      width: this.props.info.skillPer + '%'
    };

    return (
      <table className="deck-table">
        <tr>
          <td><img id="deck-img-1" src={imgPath} alt="deck" className="deck-img" /></td>
        </tr>
        <tr>
          <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={lifeMeterPerStyle}></span></div></td>
        </tr>
        <tr>
          <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={skillMeterPerStyle}></span></div></td>
        </tr>
      </table>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = DeckInfo;

