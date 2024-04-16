import Rikko from '../../assets/ennaur323.jpg'
import Zhou from '../../assets/coww.jpg'
import Chris from '../../assets/valorant.png'

function ContactSection() {
    return (
        <div id="contactSection">
            <div className="profile">
                <div className="profileInfo">
                    <h2>Zhoucow</h2>
                    <h4>Email</h4>
                    <h4>@zhoucow</h4>
                    <p>A cow from Walnut Creek.</p>
                </div>
                <img src={Zhou}></img>
            </div>
            <div className="profile">
                <div className="profileInfo">
                    <h2>Datlouguy</h2>
                    <h4>Email</h4>
                    <h4>@ch.lou</h4>
                    <p>A dat lou guy.</p>
                </div>
                <img src={Chris}></img>
            </div>
            <div className="profile">
                <div className="profileInfo">
                    <h2>Rikko</h2>
                    <h4>Email</h4>
                    <h4>@notrikko</h4>
                    <p>He is not Rikko</p>
                </div>
                <img src={Rikko}></img>
            </div>
            
        </div>
    )
}

export default ContactSection