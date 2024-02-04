import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
            {
                id: 1,
                firstname:'Kirill',
                lastname:'Sunozov',
                bio:'Bio',
                age: 17,
                isHappy: true
            },
            {
                id: 2,
                firstname:'Kirill',
                lastname:'Sunozov',
                bio:'Bio',
                age: 17,
                isHappy: true
            }
        ]
    }   
    this.addUser = this.addUser.bind(this)
 }
    render() {
        return (<div >
            <Header title="Список пользователей" />
            <main>
                <Users users={this.state.users}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    }
    addUser(user) {
        const id= this.state.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
       }
}


export default App