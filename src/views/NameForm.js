var React= require('react');

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.txtVal};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Submit button Clicked value:'+ this.state.value);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

module.exports = NameForm;
