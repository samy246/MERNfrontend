import React from "react";

export default class Infoform extends React.Component{
    constructor()
    {
        super();
        this.state={
            _id:"",
            Name:"",
            Age:"",
            City:"",
            isEdit:false

        }
    }

infoChange=event=>{
    const {name,value}=event.target;

    this.setState({
        [name]:value
    })
}
infoSubmit = event=>{
    if(!this.state.isEdit)
    {// event.preventDefault();
    let data={
        isEdit:this.state.isEdit,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
    }
    this.props.myData(data);
}
else
{
    //event.preventDefault();
    let data={
        isEdit:this.state.isEdit,
        _id:this.state._id,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
    }
    this.props.myData(data);
}
    // console.log(this.state.Name);
}

componentWillReceiveProps(props)
{
//console.log(props.setForm);
if(props.setForm._id!=null)
{
this.setState
({
    isEdit:true,
    _id:props.setForm._id,
    Name:props.setForm.Name,
    City:props.setForm.City,
    Age:props.setForm.Age
})
}

}

    render()
    {
        return(
            <form onSubmit={this.infoSubmit} autoComplete="off"> 
  <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" placeholder="Enter Your Name" 
    onChange={this.infoChange}
    name="Name"
    value={this.state.Name}
    />
  </div>
  <div className="form-group">
    <label>City:</label>
    <input type="text" class="form-control" placeholder="Enter Your City" 
     onChange={this.infoChange}
     name="City"
     value={this.state.City}
     />
  </div>
  <div className="form-group">
    <label>Age:</label>
    <input type="number" className="form-control" placeholder="Enter Your Age" 
    onChange={this.infoChange}
    name="Age"
    value={this.state.Age}/>
  </div>
  <center><button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update':'Create'}</button></center>
</form>
        )
    }



}