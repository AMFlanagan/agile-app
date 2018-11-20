import { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './RTG.scss';

export default class RTG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ticklers: [],
      ticklerNo: Math.floor(Math.random() * Math.floor(23)),
      searchNo: Math.floor(Math.random() * Math.floor(2))
    };
  }

  componentDidMount() {
    const search = [
      'new',
      'hot',
    ]

    fetch(`https://www.reddit.com/r/TodayILearned/${search[this.state.searchNo]}.json?sort=new`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ticklers: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  update() {
    this.setState({
      ticklerNo: Math.floor(Math.random() * Math.floor(20)),
    });
  }

  render() {
    const { error, isLoaded, ticklers, ticklerNo } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='loading'>
      <style jsx>{styles}</style>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
      </div>;
    } else {
      return (
        <div className="wrapper">
          <style jsx>{styles}</style>
          <h3><small className="">Random Tickler Generator</small></h3>
          <div className="tickler">
            <p>{ticklers.children[ticklerNo].data.title}</p>
            <p><a href={`${ticklers.children[ticklerNo].data.url}`} target="_blank">{ticklers.children[ticklerNo].data.url}</a></p>
          </div>
          <div className="btn-wrapper">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => { this.update() }}>Generate</button>
          </div>
        </div>
      );
    }
  }
}