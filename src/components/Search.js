import React, { Component } from 'react'

class Search extends Component {
    handleInput(){
        this.props.handleFilter(this.refs.filterValue.value)
    }
    render() {
        return (
            <form>
                <input type="number" placeholder="Search for a person" ref="filterValue" 
                onChange={this.handleInput.bind(this)}/>
            </form>
        )
    }
}
export default Search;
