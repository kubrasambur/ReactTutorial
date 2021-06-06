import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";


 class User extends Component {
     state={
         isVisible : false
     }
     static defaultProps={
        name :"Bİlgi yok",
        salary : "Bilgi yok",
        department : "bilgi yok"
    }

    /*constructor(props){
        super(props)
        this.onClickEvent = this.onClickEvent.bind(this);    
    }*/
    //bu şekilde error function yaparak da bind edebiliriz
    onClickEvent=(e) =>{

        this.setState({
            isVisible : !this.state.isVisible //true ise false, false is true yapar
        })
        
    }

    onDeleteUser = (dispatch,e) =>{
        const {id} = this.props;
        dispatch({type : "DELETE_USER",payload : id});   
    }
    /*constructor(props){
        super(props);

        this.state = {
            isVisible : false
        }
    }*/
    componentWillUnmount() {
        //component kaldırılmadan hemen önce çalışır
        console.log("componentwillunmount");
    }
    
    render() {
        //Destructing
        const {name,department,salary} = this.props;
        const{isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} =value;

                        return (
                            <div className = "col-md-8 mb-4">
                                    <div className="card" style = {isVisible ? {backgroundColor : "#bfe2e3",color : "black"} : null}>
                                        <div className="card-header d-flex justify-content-between">
                                           <h4 className = "d-inline" onClick ={this.onClickEvent}>{name}</h4>
                
                                           <button onClick ={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt"></button>
                
                                        </div>
                                        {
                                            isVisible ? <div className ="card-body">
                
                                            <p className ="card -text">Maaş : {salary}</p>
                                            <p className ="card -text">department : {department}</p>       
                                           
                                          </div> : null
                                        }
                                             
                
                                     </div> 
                                 
                             </div>
                        )
                    }       
                }
                
            </UserConsumer>
        )

    }
}

User.protoTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}
export default User;
