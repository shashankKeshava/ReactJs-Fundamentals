var axios = require('axios');

var id = "Client_ID";
var sec = "Secret_ID";
var param = "client_id=" + id + "&client_secret=" + sec;


function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

var helper = {
    //Fetch data from GitHub
    getPlayerInfo: function(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username)
        })).then(function(info) {
            return info.map(function(user) {
                return user.data;
            })
        })
    }
};

module.exports = helper;
