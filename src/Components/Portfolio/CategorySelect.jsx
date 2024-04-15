import wedding from '../../assets/weddingpic.jpg'
import modeling from '../../assets/modelpic.jpg'
import landscape from '../../assets/landscapepic.jpg'

function CategorySelect() {
    return (
        <div id="categoryPics">
            <div className="imageContainer" id='wedding'>
              <img src={wedding}></img>
              <h2>Wedding</h2>
            </div>
            <div className="imageContainer" id='model'>
              <img src={modeling}></img>
              <h2>Modeling</h2>
            </div>
            <div className="imageContainer" id='landscape'>
              <img src={landscape}></img>
              <h2>Landscape</h2>
            </div>
        </div>

    )
}

export default CategorySelect