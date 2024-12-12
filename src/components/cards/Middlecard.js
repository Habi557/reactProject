import { Card, CardTitle, CardText, Button, CardImg, Input, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import myphoto from '../Asserts/images/Myphoto.jpg';
import middle from '../../css/Home/middle.css'
import { FaRegImage } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { PiArticleThin } from "react-icons/pi";
import React, { useEffect, useState } from 'react';
import Postmodel from '../../models/post/postmodel'
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { PiHandsClappingThin } from "react-icons/pi";
import profilebackgroundImage from '../Asserts/images/profilebackgroundImage.jpg'





function Middlecard() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const togglePopover = () => setPopoverOpen(!popoverOpen);
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com',postedPhoto:'https://images.stockcake.com/public/2/d/b/2db40f55-dbb2-483b-8b56-fa73eab4601f_large/colorful-festival-fun-stockcake.jpg' },
        { id: 2, name: 'Bob', email: 'bob@example.com',postedPhoto:'https://images.stockcake.com/public/9/c/9/9c96aa52-0348-4f00-8123-444e05283540_large/joyful-celebration-moment-stockcake.jpg' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com',postedPhoto:'https://images.stockcake.com/public/2/2/6/22696ce9-4d70-47f4-ac16-c86719e2bf71_large/joyful-traditional-parade-stockcake.jpg' }
        // { id: 4, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 5, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 6, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 7, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 8, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 9, name: 'Charlie', email: 'charlie@example.com' },
        // { id: 10, name: 'Charlie', email: 'charlie@example.com' },


    ];
    return (
        <>
            <div className="middlecard">
                <Card body style={{ height: 'auto', padding: '0rem' }} >
                    <div className="createPost p-2">
                        <div className="d-flex gap-2">
                            <div className="profilePhoto">
                                <CardImg alt="Card image cap" src={myphoto} top />
                            </div>
                            <div className="postinput w-100">
                                <Button className="btn btn-secondary bg-transparent border-0 text-dark w-100" onClick={toggle}>
                                    <Input bsSize="lg" id="exampleEmail" className="fw-bold" name="email" placeholder="Start a post, try writing with AI" type="email" />
                                </Button>
                            </div>
                        </div>
                        <div className="postgallery d-flex justify-content-around p-2">
                            <div className="media">
                                <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                    <div className="d-flex gap-2">
                                        <div className="mediacolor"><FaRegImage /></div>
                                        <div>Media</div>
                                    </div>
                                </Button>
                            </div>
                            <div className="event">
                                <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                    <div className="d-flex gap-2">
                                        <div className="calendercolor"><SlCalender /></div>
                                        <div>Event</div>
                                    </div>
                                </Button>
                            </div>
                            <div className="writearticle">
                                <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                    <div className="d-flex gap-2">
                                        <div className="articlecolor"><PiArticleThin /> </div>
                                        <div className="w-max-content">Write article</div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
                {users.map((user) => (
                    <div key={user.id} className="card mt-4">
                        <Card body  style={{ height: 'auto', padding: '0px' }}>
                            <div className="d-flex gap-2 p-3">
                                <div className="profilePhoto">
                                    <CardImg alt="Card image cap" src={myphoto} top />
                                </div>
                                <div>
                                   <div><strong>{user.name}</strong></div> 
                                   <div className="font-xs">followers</div>

                                </div>
                            </div>
                            <div className="p-3">
                             Life is a race and we have to run
                            </div>
                            <div>
                            <CardImg
                        alt="Card image cap"
                        src={user.postedPhoto}

                        top
                    />
                            </div>
                            <hr className="m-1" />
                            <div className="d-flex justify-content-around">
                                <div className="hover rounded-2 p-2">
                                    <Popover
                                        placement="top"
                                        isOpen={popoverOpen}
                                        target="liketooltip"
                                        toggle={togglePopover}
                                        trigger="hover"
                                    >
                                        <PopoverHeader></PopoverHeader>
                                        <PopoverBody>
                                            <div className="d-flex gap-2">
                                                <div className="text-primary iconhover">
                                                    <SlLike className="likecolor" />
                                                </div>
                                                <div className="text-success iconhover">
                                                    <PiHandsClappingThin />
                                                </div>

                                            </div>



                                        </PopoverBody>
                                    </Popover>
                                    <Button id="liketooltip" className="btn btn-secondary bg-transparent border-0 text-dark">
                                        <div className="d-flex gap-2">
                                            <SlLike />
                                            <div className="like">
                                                <span>Like</span>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                                <div className="hover rounded-2 p-2">
                                    <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                        <div className="d-flex gap-2">
                                            <FaRegCommentDots />
                                            <div className="comment">
                                                <span>Comment</span>
                                            </div>

                                        </div>
                                    </Button>
                                </div>
                                <div className="hover repost rounded-2 p-2">
                                    <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                        <div className="d-flex gap-2">
                                            <BiRepost />
                                            <div className="repost">
                                                <span>Repost</span>
                                            </div>

                                        </div>
                                    </ Button>
                                </div>
                                <div className="hover rounded-2 p-2">
                                    <Button className="btn btn-secondary bg-transparent border-0 text-dark">
                                        <div className="d-flex gap-2">
                                            <IoIosSend />
                                            <div className="send">
                                                <span>Send</span>
                                            </div>

                                        </div>
                                    </ Button>
                                </div>
                            </div>
                        </Card>
                    </div>))}
                {/* <div className="card mt-4">
                    <Card
                        body
                        className="my-2"
                        style={{
                            height: '30rem'
                        }}
                    >
                        <CardTitle tag="h5">
                            Middle card
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button color="primary">
                            Go somewhere
                        </Button>
                    </Card>
                </div> */}
                <Postmodel modal={modal} toggle={toggle} myphoto={myphoto} />
            </div>
        </>
    )
}
export default Middlecard;