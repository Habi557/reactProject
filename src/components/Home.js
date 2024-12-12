import { Container, Card, CardTitle, CardText, Button, Nav } from "reactstrap";
import { home } from "../css/home.css"
import { ImHome3 } from "react-icons/im";
import Leftcard from "./cards/Leftcard";
import Rightcard from "./cards/Rightcard";
import Middlecard from "./cards/Middlecard";
import Header from './Header';
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    },[]);
    return (
        <>
            <div className="parent mt-5">
                <div className="cards">
                    <Leftcard profileData={profileData} />
                    <Middlecard />
                    <Rightcard />
                </div>
            </div>
        </>
    );
}

export default Home;


const profileData = {
    name: "Habibulla shaik",
    headline: "Java Full stack Developer | 2.5 Years of Experience(Zensar Technologies) Expertise in Spring Boot, Angular, Javascript, Mysql, Spring Data JPA,Bit bucket (Immediate joiner)",
    connectionCount: 10

}
