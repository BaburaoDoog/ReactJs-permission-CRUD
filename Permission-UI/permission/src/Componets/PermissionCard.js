import React from "react";
import { Link } from "react-router-dom";

import update from './Images/edit.png';
import edit from './Images/delete.png';

const message =()=>{
    alert("Are you sure you want to delete");
    return
}

export const PermissionCard =(props)=>{
    const {id,emailId,tenantName,permissionType,createdOn} =props.permission;
    return (
        <div className="item">
        
        <div className="content">
                
                <div className="header">{emailId}</div>
                <div className="header">TenantName : {tenantName}</div>
                <div className="header">PermissionType : {permissionType}</div>
                <div className="header">{createdOn}</div>
            </div>
            
            <Link to="/" onClick={message}>
            <img src={edit} alt={edit} className="edit" onClick={() =>props.clickHandler(id)}
            />
            
            </Link ><br/>
            <Link to={{pathname:`/update`, state:{permission: props.permission}}}>
              <img src={update} alt={update} className="update" />
            </Link>
            
        </div>
        
       
    )
}

//<i class="update"  style={{color:"blue" ,marginTop:"7px"}}>update</i>
//<i className="far fa-trash-alt ml-auto" onClick={() =>props.clickHandler(id)} style={{color:"red" ,marginTop:"7px"}}>delete</i>