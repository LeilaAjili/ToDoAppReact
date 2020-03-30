import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
 
class Form extends Component{

    state= {
          task:"",  
          tasks:[{title:'Task1',id:Math.random(),}]
           }

//Recupération des données

handleChangeTask=(e)=>{
      
        this.setState({
          task:e.target.value
          
        })
    }

    addTask=()=>{
        if(this.state.task.length){
        this.setState({
            tasks:[...this.state.tasks,{
                title:this.state.task,
                id:Math.random(),
                check:false
            }],
            task:''       
          })
        }
    }

    handleDelete=(i)=>{
        this.setState({
            tasks:this.state.tasks.filter((el,index)=> index !==i)
        })
    }
     
    handleComplete=(i)=>{
      this.setState({
            tasks:this.state.tasks.map((el,index)=> index === i ? {...el, check:!el.check}:el)
        })
        }

    render(){
        console.log(console)
        return (
            <div>
              <div className="container ">
            <div className="row div"></div>
            <div className="row div-principal">
                <div className="col-lg-2 "></div>
                <div className="col-lg-8 background">
                    <div className="div ">
                        <h1 className="titre">To Do App!</h1>
                        <h5 className="titre">&nbsp;Add new To-Do:</h5>
                    </div>
                    <div className="row div">
                        <div>
                            <input type="text"value={this.state.task} className="input"   id="myInput" onChange={this.handleChangeTask}  />
                            <br />
                            <button type='submit' className="button" value="ADD" onClick={this.addTask}  >submit</button>
                        </div>  
                    </div>   
                </div>
                <div className="col-lg-2 "></div>
            </div>
            <div class="row div">
               <div class="col-lg-2 "></div>
               <div class="col-lg-8  ">
               <ul id="myUL">
                    {this.state.tasks.map((el,i)=>
                    <li  key={i} ><h3 className={el.check?"complete": "undo"} >{el.title}</h3>
                    <div>
                    <button onClick={()=>this.handleComplete(i)}>{el.check?"undo":"complete"}</button>
                    <button onClick={()=>this.handleDelete(i)}>delete</button>
                    </div>
                    </li>    
     )
 }   
                  </ul>
               </div>
               <div class="col-lg-2 "></div>
            </div>
            </div>
    </div> 
        )
    } 
}


export default Form



