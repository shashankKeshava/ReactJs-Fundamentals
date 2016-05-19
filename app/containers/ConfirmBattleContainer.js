var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');

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
    },
    render: function() {
        return (<ConfirmBattle
                               isLoading={ this.state.isLoading }
                               playerInfo={ this.state.playerInfo } />)
    }
});

module.exports = ConfirmBattleContainer;
