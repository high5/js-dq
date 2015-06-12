/**
 * author high5<high525jp@gmail.com>
 */

//var Field = require('./Field.react');
//var Deck  = require('./Deck.react');
var React = require('react');
var Field = require('./Field.react');
var DeckList = require('./DeckList.react');
var Command = require('./Command.react');




var BattleStore = require('../stores/BattleStore');

var $ = require('jquery');
var velocity = require('velocity-animate');

function getBattleState() {
  return {
    enemyList: BattleStore.getEnemyList()
  };
}

var BattleApp = React.createClass({

  getInitialState: function() {



    /*
    $.get( "/css/app.css", function( data ) {
      console.log(data);
    });

    $.get( "/flux/index.html", function( data ) {
      console.log(data);
    });
    */


    //velocity(document.body, { opacity: 0.3 });

    /*
    request
      .get('/css/app.css')
      //.use(nocache)
      .end(function(err, res){
        console.log("qqqqqqqqqq333");
        // Do something
        console.log("qqqqqqqqqq2");
        console.log(res.text);
    });
    */

    /*
    console.log("test2");
    BattleStore.setBattleState(
      {
        "deckList":[
          {"firstName":"John", "lastName":"Doe"},
          {"firstName":"Anna",	"lastName":"Smith"},
          {"firstName":"Peter", "lastName":"Jones"}
        ],
        "enemyList":[
          {"firstName":"John", "lastName":"Doe"},
          {"firstName":"Anna",	"lastName":"Smith"},
          {"firstName":"Peter", "lastName":"Jones"}
        ]
      }
    );
    */

    return getBattleState();
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function() {





  },



  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Field  />
        <DeckList />
        <Command />
      </div>
    );
  },

  /**
   */
  _onChange: function() {
    this.setState();
  }

});

module.exports = BattleApp;
