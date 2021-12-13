import React from 'react'
import Axios from 'axios'

class ReadData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
      }

      componentDidMount() {
        this.getObj();
        this.interval = setInterval(() => {
          this.getObj();
        }, 5000);
      }

      getObj() {
          Axios.get("https://selenium-e2e-test-fmwlalvsoq-wl.a.run.app/inc_test")
          .then((data) => {
            this.setState({
                data: data.data
              });
          })
      }

      render() {
        return (
          <div>
            <h1>Jeff's Data!</h1>
            {this.state.data ? (
            <>
            
            <img src={this.state.data.image} />
            <div className='d-flex'>
                <h3>Counter Value:</h3>
                <p>{this.state.data['Counter Value']}</p>
            </div>
            <div className='d-flex'>
                <h3>Test one:</h3>
                <p>{this.state.data['test one: ']}</p>
            </div>
            <div className='d-flex'>
                <h3>Test two:</h3>
                <p>{this.state.data["test two: "]}</p>
            </div>
            <div className='d-flex'>
                <h3>Test three:</h3>
                <p>{this.state.data["test three: "]}</p>
            </div>
            <div className='d-flex'>
                <h3>Test four:</h3>
                <p>{this.state.data["test four: "]}</p>
            </div>
            <div>{JSON.stringify(this.state.data)}</div>
                </>
            ):(<p>...loading data!</p>)}
          </div>
        );
      }


}

export default ReadData