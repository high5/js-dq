var React = require('react');
var Enemy = require('./Enemy.react');
var Menu = require('./Menu.react');
var Enemy = require('./Enemy.react');
var Story = require('./Story.react');


var Field = React.createClass({

  getInitialState: function() {
    return null;
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="field" className="field-375-667">
        <Menu  />
        <Enemy  />
        <Story  />
      </div>
      );
  },

  _onSave: function(text) {

  }

});

module.exports = Field;
