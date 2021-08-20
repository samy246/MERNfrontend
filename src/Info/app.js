import React from "react";
import Infoform from "./form";
import InfoTable from "./table";
import axios from "axios";

export default class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:[],
            editData:[]

        }
    }

    create=data=>
    {
        if(!data.isEdit)
        {
            axios.post("http://localhost:2000/info",data).then(res=>{
                this.getAll();
            })
        }
        else
        {
            axios.put("http://localhost:2000/info/update",data).then(res=>{
              this.getAll();  
            //console.log(res);

            })
        }
        
       
    }

    componentDidMount()
    {
this.getAll();
document.body.style.backgroundColor="orange"

    }

    getAll()
    {
        axios.get("http://localhost:2000/info").then(res=>{
           this.setState({
                data:res.data
            })
        })
    }
    update=data=>
    {
console.log(data);
this.setState({
    editData:data
})
    }

    del=data=>
    {
var option=window.confirm(`Are You sure want to Delete ${data.Name}`)

if(option)
{
    axios.delete(`http://localhost:2000/info/del/${data._id}`).then(res=>{
         console.log(res);
         this.getAll();
        })
        }


    }
    render()
    {
        return(
            <div className ="container  mt-4" style={{backgroundColor:"lavender"}}>
                <center><h1>MERN STACK</h1></center>
                <div className="row" >
                    <div className="col-6">
                        <Infoform myData={this.create} setForm={this.state.editData}/>
                    </div>
                    <div className="col-6">
                    <InfoTable getData={this.state.data} setData={this.update} del={this.del}/>
                    </div>


                </div>
                
            </div>
        )
    }
}



