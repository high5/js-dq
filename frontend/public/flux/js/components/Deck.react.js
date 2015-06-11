var React = require('react');

var Deck = React.createClass({

  getInitialState: function() {
    return null;
  },


  /**
   * @return {object}
   */
  render: function() {

    var meterPerStyle = {
      width: '50%'
    };

    return (
      <div id="deck">
        <table className="deck-table">
          <tr>
            <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
          </tr>
          <tr>
            <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
          </tr>
          <tr>
            <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
          </tr>
        </table>
        <table className="deck-table">
          <tr>
            <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
          </tr>
          <tr>
            <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
          </tr>
          <tr>
            <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
          </tr>
          <table className="deck-table">
            <tr>
              <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
            </tr>
            <tr>
              <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
            <tr>
              <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
          </table>
          <table className="deck-table">
            <tr>
              <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
            </tr>
            <tr>
              <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
            <tr>
              <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
          </table>
          <table className="deck-table">
            <tr>
              <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
            </tr>
            <tr>
              <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
            <tr>
              <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
          </table>
          <table className="deck-table">
            <tr>
              <td><img id="deck-img-1" src="/images/deck/2.png" alt="deck" className="deck-img" /></td>
            </tr>
            <tr>
              <td><div id="deck-life-meter-container-1" className="meter-deck green nostripes"><span id="deck-life-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
            <tr>
              <td><div id="deck-skill-point-meter-container-1" className="meter-deck blue nostripes"><span id="deck-skill-point-meter-1" style={meterPerStyle}></span></div></td>
            </tr>
          </table>
        </table>
      </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = Deck;
