import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Righcard() {
    const users = [
        { id: 1, name: 'More women need mentors', time: '4d ago • 4,555 readers' },
        { id: 2, name: 'Employee rewards get a makeover', time: '4d ago • 4,555 readers' },
        { id: 3, name: 'What Gen Z wants in their careers', time: '4d ago • 4,555 readers' },
        { id: 4, name: 'Thinking beyond Olympic medals', time: '4d ago • 4,555 readers' },
        { id: 5, name: 'Thinking beyond Olympic medals', time: '4d ago • 4,555 readers' },
        { id: 6, name: 'Thinking beyond Olympic medals', time: '4d ago • 4,555 readers' }


    ];
    return (
        <>
            <div className="card">
                <Card
                    body
                    style={{
                        height: '30rem',
                        padding: '0px'

                    }}>
                    <div className="px-3 mt-2">
                        <h5 > <strong>LinkedIn News </strong></h5>
                    </div>
                    <div className="px-3 fw-bold">
                        Top stories
                    </div>
                    {users.map((user) => (

                    <div className="hover mt-2" key={user.id}>
                        <Link className="text-decoration-none text-secondary" style={null} to="/post">
                            <div className="d-flex px-3">
                                <div className="font fw-bold p-1">
                                    <div className="text-dark larger">
                                    {user.name}
                                    </div>
                                    <div >
                                    {user.time}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>))}


                </Card>
            </div>
        </>
    )
}
export default Righcard;