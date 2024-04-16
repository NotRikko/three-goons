import wedding from '../../assets/weddingpic.jpg'
import modeling from '../../assets/modelpic.jpg'
import landscape from '../../assets/landscapepic.jpg'
import { Link } from 'react-router-dom'

function CategorySelect() {
    return (
        <div id='categoryPics'>
            <div className="imageContainer" id='wedding'>
              <Link to='wedding'>
                <img src='https://junebugweddings.com/wedding-blog/wp-content/uploads/2017/10/stunning-chicago-wedding-portrait-inspiration-lake-shore-east-park-31-700x1049.jpg'></img>
                <h2>Wedding</h2>
              </Link>
            </div>
            <div className='imageContainer' id='model'>
              <Link to='model'>
                <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/fashion-photography-inspiration-8.jpg'></img>
                <h2>Modeling</h2>
              </Link>
            </div>
            <div className='imageContainer' id='landscape'>
              <Link to='landscape'>
                <img src='https://teemusphoto.com/wp-content/uploads/2019/10/DSC4284-683x1024.jpg'></img>
                <h2>Landscape</h2>
              </Link>
            </div>
        </div>

    )
}

export default CategorySelect