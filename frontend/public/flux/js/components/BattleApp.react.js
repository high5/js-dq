/**
 * author high5<high525jp@gmail.com>
 */

//var Field = require('./Field.react');
//var Deck  = require('./Deck.react');
var React = require('react');
//var Field = require('./Field.react');
var Menu = require('./Menu.react');
var EnemyList = require('./EnemyList.react');
var Story = require('./Story.react');
var DeckList = require('./DeckList.react');
var Command = require('./Command.react');




var BattleStore = require('../stores/BattleStore');

var $ = require('jquery');
var velocity = require('velocity-animate');

function getBattleState() {
  return {
    enemyList: BattleStore.getEnemyList(),
    deckList: BattleStore.getDeckList(),
    test: "hoge"
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
    //this._onChange();
  },

  componentWillUnmount: function() {


  },



  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        {this.state.test}
        <div id="field" className="field-375-667">
          <Menu  />
          <EnemyList  enemyList={this.state.enemyList} />
          <Story />
        </div>
        <DeckList />
        <Command />
      </div>
    );
  },

  /**
   */
  _onChange: function() {
    /*
    console.log("BattleApp._onChange");
    this.setState(
      {
        test:"mogemoge",
        enemyList: BattleStore.getEnemyList2()
      }
    );
    */
  }

});

module.exports = BattleApp;
