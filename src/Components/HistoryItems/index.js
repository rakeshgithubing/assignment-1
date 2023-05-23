import './index.css'

const HistoryItems = props => {
  const {item, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="item-container">
        <div className="time-container">
          <p className="time-paragraph">{timeAccessed}</p>
        </div>
        <div className="details-main-container">
          <div className="details-container">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p className="heading">{title}</p>
            <p className="paragraph">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItems
