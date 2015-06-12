var React = require('react');
var Menu = require('./Menu.react');
var EnemyList = require('./EnemyList.react');
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
        <EnemyList  />
        <Story  />
      </div>
      );
  },

  _onSave: function(text) {

  }

});

module.exports = Field;
