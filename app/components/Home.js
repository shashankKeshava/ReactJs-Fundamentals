var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
    render: function() {
        return (
            <div
                 className="jumbotron col-sm-12 text-center"
                 style={ transparentBg }>
              <h1>GitHub Battle</h1>
              <p className='lead'>
                Spartans! Ready your breakfast and eat hearty... For tonight, we dine in hell!
              </p>
              <Link to='/playerOne'>
              <button
                      type='button'
                      className='btn btn-lg btn-success'>
                Get Started
              </button>
              </Link>
            </div>
        )
    }
});

module.exports = Home;
