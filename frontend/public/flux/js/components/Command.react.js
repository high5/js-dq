var React = require('react');

var Command = React.createClass({
  getInitialState: function() {
    return null;
  },

  displaySkillsClick: function() {
    alert("displaySkillsClick");
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="command">
        <img id="button-img-1" src="/images/button/sample.png" alt="deck" className="command-button-img"></img>
        <img id="button-img-2" onClick={this.displaySkillsClick} src="/images/button/sample.png" alt="deck" className="command-button-img"></img>
        <img id="button-img-3" src="/images/button/sample.png" alt="deck" className="command-button-img"></img>
      </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = Command;
