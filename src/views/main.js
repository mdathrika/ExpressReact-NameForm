const React  = require('react');
const ReactDOMServer = require('react-dom/server');
const NameForm  = require('./NameForm');

function MainApp() {

    var contentHtml = ReactDOMServer.renderToString(<NameForm txtVal='Enter Name'/>);
    var js = 'client(' + JSON.stringify(['Enter Name']) + ')';
    return (

        <html lang="en">
            <head>
                <script src="client.js"></script>
            </head>
            <body>

              <div id="root" dangerouslySetInnerHTML={{__html: contentHtml}} />


              <div id="greet">
              </div>
              <script dangerouslySetInnerHTML={{__html: js}} />
            </body>
        </html>

        );
}

module.exports = MainApp;
