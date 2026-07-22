import { useState } from "react";
import heroImg from './assets/profile-pic.png'
import {Link} from "react-router-dom";

function MyButton({count, onClick}) {
    return(
        <button onClick={onClick}>
            My Button {count} time(s)
        </button>
    );
}

function AdminPanel() {
    return(<h1>Admin Panel</h1>);
}

function LoginForm() {
    return(<h1>Login Form</h1>);
}

const user = {
    name: "Johan Benderschmidt",
    imageUrl: heroImg
}
let isLoggedIn = false;

const portfolio_pieces = [
    {id: 1, title: "First Design"},
    {id: 2, title: "Second Design"},
    {id: 3, title: "Third Design"}
];

const renderedList = portfolio_pieces.map(portfolio_piece => (
   <li key={portfolio_piece.id}>
       {portfolio_piece.title}
   </li>
));

export default function App() {
    //move the state of the counter up so it's applied to both buttons and shared
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        if (count === 100) {
            alert("You clicked! Idiot! " + count + " times!");
        }
    }

    let content;
    if (isLoggedIn) {
        content = <AdminPanel />
    } else {
        content = <LoginForm />
    }
    return (
        <div className="App">
            {content}
            <h1>UX Designer Profile</h1>
            <h1>{user.name}</h1>
            <img className="profile-pic"
                 src={user.imageUrl}
                 alt={'Photo of ' + user.name}
            />
            <br />
            <MyButton count={count} onClick={handleClick} />
            <br/>
            <ol>
                {renderedList}
            </ol>
            <Link to={"/tictactoe"}>Go to Tic Tac Toe</Link>
        </div>
    );
}