//Pure Functions fn(d)=v


var USER_DATA = {
    name: 'Shashank K',
    username: 'Kexcaliber',
    image: 'http://dayt.se/uploads/full/Vikings-TMNS.png'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*Focused
Independent
Reusable
Small
Testable
*/


var Container = React.createClass({
    render: function() {
        return (
            <Wrapper>
        <Welcome user={USER_DATA}/> 
        <Hello/>
      </Wrapper>
        )
    }
});

var Wrapper = React.createClass({
    render: function() {
        return (
            <div style={{backgroundColor: 'yellow'}}>
        <h1> ReactJS Fundamentals </h1>
        {this.props.children}
      </div>
        )
    }
});

var Welcome = React.createClass({
    render: function() {
        return <div>Welcome {this.props.user.name}!</div>
    }
});

var Hello = React.createClass({
    render: function() {
        return <div>Hello ReactJS Program!</div>
    }
})

ReactDOM.render(<Container />, document.getElementById('app'));
