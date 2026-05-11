import { useState } from "react";
import heroImg from './assets/profile-pic.png'

function MyButton() {
    return(
        <button>My Button</button>
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
        </div>
    );
}