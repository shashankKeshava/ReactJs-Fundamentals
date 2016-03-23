//Pure Functions fn(d)=v


var USER_DATA = {
    name: 'Shashank K',
    username: 'shashankKeshava',
    image: 'https://avatars1.githubusercontent.com/u/15323807?v=3&s=460'
};

var React = require('react');
var ReactDOM = require('react-dom');

/*
Focused
Independent
Reusable
Small
Testable
*/

var HelloWorld = React.createClass({
    render: function() {
        return (<div> Hello {this.props.name} ReactJS!!!! </div>)
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageURL} style={{height: 100, width:100}}/>
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div> 
        <Link href = {'https://github.com/' + this.props.username }> 
            {this.props.username}
        </Link>
    </div>
        )
    }
});

var Link = React.createClass({
    changeURL: function() {
        window.location.replace(this.props.href)
    },
    render: function() {
        return (
            <span style={{color:'blue',cursor:'pointer'}} onClick={this.changeURL}> 
                {this.props.children}
            </span>)
    }
});


var ProfileName = React.createClass({
    render: function() {
        return <div> {this.props.name}</div>
    }
});


var Avator = React.createClass({
    render: function() {
        return (<div> 
            <ProfilePic imageURL={this.props.user.image}/>
            <ProfileName name={this.props.user.name} />
            <ProfileLink username={this.props.user.username} />
         </div>)
    }
});


ReactDOM.render(<Avator user={USER_DATA} />, document.getElementById('app'));