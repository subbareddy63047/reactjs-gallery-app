// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachObj, isActive, selectImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachObj

  const clicked = () => {
    selectImage(id)
  }

  return (
    <li
      className={`each-thumbnail-img ${
        isActive ? 'selected-thumbnail-image' : ''
      }`}
    >
      <button type="button" onClick={clicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
