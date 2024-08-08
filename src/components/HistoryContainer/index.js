import './index.css'
import {Component} from 'react'
import SpecificSite from '../SpecificSite'

class HistoryContainer extends Component {
  state = {
    searchInput: '',
    historyList: this.props.initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(item => item.id !== id)
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="history-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search history"
            />
          </div>
        </div>
        <ul className="history-list">
          {searchResults.length === 0 ? (
            <p className="empty-history">There is no history to show</p>
          ) : (
            searchResults.map(item => (
              <SpecificSite
                key={item.id}
                siteDetails={item}
                deleteHistoryItem={this.deleteHistoryItem}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default HistoryContainer
