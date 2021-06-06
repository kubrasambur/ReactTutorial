import React, { Component } from 'react'

class Test extends Component {
    // önce constructor sonra render çalışır
    constructor(props){
        super(props);
        this.state = {
            a : 10
        }
        console.log("constructor")
    }
    //önce constructor çalışır sonra render component i mount eder ve daha sonra componenetdidmount metodu çalışır
    componentDidMount() {
        //APİ istekleri burada gerçekleştirilir
        console.log("componentdidmount");
        //en son componentdidmount metodu çalıştıktan sonra tekrar setstate metodu kullanıldığı için render bidaha çalışır(component tekar render edilir)
        this.setState({
            a : 20
        })
    }

    componentDidUpdate = (prevProps, prevState) =>{
        console.log("componentdidupdate")
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate");
        return false;
    }
    
    
    render() {
        console.log("render");
        //render içinde state değiştirme işlemi yapılamaz : 
        /*this.setState({
            a : 20
        })*/
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
