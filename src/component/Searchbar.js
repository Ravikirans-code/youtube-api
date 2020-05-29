import React from 'react';

class Searchbar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return (
            <div className="serach-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video serach Bar</label>
                        <input value={this.state.term} name="videoSearch" type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}
export default Searchbar;