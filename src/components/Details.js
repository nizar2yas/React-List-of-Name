import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Detail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Detail</p>
                <p> <h3> name: </h3> {this.props.test.name}</p>
                <p> <h3> Age: </h3> {this.props.test.age}</p>

                <li ><Link to='/' >Back</Link></li>
            </div>
        )
    }
}
export default Detail;