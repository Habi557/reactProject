import { Card, CardTitle, CardText, Button, CardImg } from "reactstrap";
import profilebackgroundImage from '../Asserts/images/profilebackgroundImage.jpg'
import myphoto from '../Asserts/images/Myphoto.jpg';
import left from '../../css/Home/left.css'
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";

function Leftcard({profileData}) {
    return (
            <Card
                 >
                <div className="backgroundphoto">
                    <CardImg
                        alt="Card image cap"
                        src={profilebackgroundImage}

                        top
                    />
                </div>
                <div className="main text-center font p-2">

                    <div className="profilephoto">
                        <CardImg
                            alt="Card image cap"
                            src={myphoto}

                            top
                        />
                    </div>
                    <div className="mt-4">
                        <h6>{profileData.name}</h6>
                    </div>
                    <p className="m-0">{profileData.headline}</p>
                </div>
                <hr className="hr"/>
                <div className="connections mt-2 mb-2">
                    <div className="hover">
                        <ul className="no-bullets p-2">
                            <li>
                                <Link  className="text-decoration-none text-secondary" style={null} to="/post">
                                 <div className="d-flex justify-content-between">
                                    <div className="font fw-bold">
                                        <div>
                                          Connections
                                        </div>
                                        <div className="text-dark">
                                          Grow your Network
                                        </div>
                                    </div>
                                    <div className="">
                                       <span className="text-primary">{profileData.connectionCount}</span>
                                    </div>
                                   
                                 </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr className="hr"/>
                <div className="premium hover p-2"> 
                <Link  className="text-decoration-none text-secondary" style={null} to="/home">

                    <div className="achieve font">
                       <span> Achieve your goals with premium</span>
                       <br/>
                       <span className="fw-bold text-dark">Try Premium for $ 0 </span>
                    </div>
                    </Link>
                </div>
                <hr className="hr"/>
                <div className="saveiteams p-2 hover">
                  <Link  className="text-decoration-none text-secondary" style={null} to="/home">
                  <div className="d-flex gap-2">
                    <div>
                    <FaBookmark className="fabookmark"/>

                    </div>
                    <div>
                        <span> save iteams</span>
                    </div>
                    </div>
                   </Link> 

                </div>
                <hr className="hr"/>




            </Card>
    )
}
export default Leftcard;