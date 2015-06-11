/**
 * Created on 15/06/10.
 */
var React = require('react');

var Story = React.createClass({

  getInitialState: function() {
    return null;
  },


  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="story" className="story-375-667">
        敵Aの攻撃<br />
        32のダメージを食らった
      </div>
      );
  },

  _onSave: function(text) {

  }

});

module.exports = Story;
