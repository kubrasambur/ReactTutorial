import React, { Component } from 'react'
import axios from "axios";

const UserContext = React.createContext();
//Provider, Consumer

const reducer =(state,action) =>{
  switch (action.type) {
    case "DELETE_USER":
        return{
         ...state,
         users:state.users.filter(user =>action.payload!== user.id)
       }
    case "ADD_USER":
      return{
        ...state,
        // users bir array olduğu için eşitleme işlemini bu şekilde gerçekleştiremeyiz 
        //users : state.users.push(action.payload)
        //onun yerine aşağıdaki gibi yaparız:
        users : [...state.users,action.payload] //bu şekilde eski bilgilerin içerisine yenisini ekliyoruz
      }
    default: 
      return state
      
  }
}

export  class UserProvider extends Component {
    state ={
    
        users: [],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
      componentDidMount =async () => {
        const response = await axios.get("http://localhost:3004/users");
        this.setState({
          users : response.data
        })

      }
      
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

/*
state ={
  a:10,
  b:20,
  c:30
}

{
  ...state //bu şekilde yukarıdaki değerleri buraya yerleştiriyoruz
}

yukarıdaki şu anlama geliyor:
{
  a:10,
  b:20,
  c:30
  a:20 dersek a nın yeni değeri 20 olur ilk değeri silinir
}
*/