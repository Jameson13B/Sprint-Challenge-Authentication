import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    axios.get('http://localhost:5000/api/jokes', requestOptions)
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        console.error('Axios Failed');
      })
  }
  handleLogout = e => {
    localStorage.removeItem('jwt')
    this.props.history.push('/signin');
  }
  render() {
    return (
      <div className='jokes'>
        {/* Logout Button */}
        {localStorage.getItem('jwt') && (
          <div className='btn' onClick={this.handleLogout}>Logout</div>
        )}
        <div className='jokes-list'>
          {this.state.jokes.map(joke => {
            return (
              <div key={joke.id} className='joke'>
                <p>{joke.setup}</p>  
                <p>{joke.punchline}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Jokes;