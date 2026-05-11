import { useState } from "react";
import heroImg from './assets/profile-pic.png'

function MyButton() {
    function handleClick() {
        alert("You clicked! Idiot!");
    }
    return(
        <button onClick={handleClick}>My Button</button>
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
            <MyButton />
            <ol>
                {renderedList}
            </ol>
        </div>
    );
}