var React = require('react');
var ReactDOM  = require( 'react-dom');
var NameForm  = require( './NameForm');

function updateUI(props) {
    // ReactDOM.render(
    //   <h1>Hello <NameForm /> </h1>,
    //   document.getElementById('greet')
    // );

    console.log('Rendering on Client Side');
    ReactDOM.render(<NameForm txtVal={props[0]}/>, document.getElementById('root'));

}

module.exports = updateUI;
