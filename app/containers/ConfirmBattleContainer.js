var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');
var githubHelpers = require('../utils/githubHelpers.js');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playerInfo: []
        }
    },
    componentsDidMount: function() {
        var query = this.props.location.query;
        //Fetch Info from GitHub and Update State
        githubHelpers.getPlayerInfo([query.playerOne, query.playerTwo]).then(function(players) {
            console.log('Players', players);
        })
    },
    render: function() {
        return (<ConfirmBattle
                               isLoading={ this.state.isLoading }
                               playerInfo={ this.state.playerInfo } />)
    }
});

module.exports = ConfirmBattleContainer;
