import React from "react";


export class AddPermission extends React.Component{
state ={
  
    "emailId": "",
    "tenantName": "",
    "permissionType": "",
    "createdOn": ""
}

add =(e)=>{
    e.preventDefault();
    if(this.state.emailId === "" || this.state.tenantName ==="" || 
    this.state.permissionType ==="" || this.state.createdOn ===""){
        alert("All the fields mandatory!")
        return
    }
    this.props.addPermissionHandler(this.state);
    this.setState({emailId: "",tenantName: "",permissionType: "",createdOn: ""})
    this.props.history.push("/")
    
}
    render(){
        return (
        <div className="parent">
            <div className="child">
            <h2>Add Permission</h2>
            <form className="form" onSubmit={this.add}>
            
                    <div className="field">
                    <label>Email Id</label>
                <input type="text" name="emailId" className="inputfield"  placeholder="Email Id"  value={this.state.emailId} onChange={(e) =>this.setState({emailId: e.target.value})}/>
                </div>
                    <div className="field">
                <label>TenantName</label>
                <input type="text" name="tenantName"  className="inputfield" placeholder="TenantName"  value={this.state.tenantName} onChange={(e) =>this.setState({tenantName: e.target.value})}/>
                </div>
                    <div className="field">
                <label>Permission Type</label>
                <input type="text" name="permissionType"  className="inputfield" placeholder="Permission Type"  value={this.state.permissionType} onChange={(e) =>this.setState({permissionType: e.target.value})}/>
                </div>
                    <div className="field">
                <label>CreatedOn</label>
                <input type="text" name="createdOn"  className="inputfield" placeholder="createdOn"  value={this.state.createdOn} onChange={(e) =>this.setState({createdOn: e.target.value})}/>
                </div>
                <div className="btndiv">
            <button className="btn"><strong>Add</strong></button>
            </div>
            </form>
            </div>
        </div>
            );
    }
}