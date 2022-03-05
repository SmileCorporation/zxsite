import React,{Component}  from "react";
import "./index.css"
export default class Button extends Component{
   constructor(props:any){
       super(props);

   }
    render(){
        return <button className="button">这是一个Button 组件</button>
    }
}

