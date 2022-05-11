import React from "react";
import { PermissionCard } from "./PermissionCard";
import {Link } from "react-router-dom";

export const PermissionList =(props) =>
{
    console.log(props);

    const deletePermissionHandler =(id)=>{
        props.getPermissionId(id);
    };

    

    const renderPermission =props.permissions.map((permission)=>{
        return(
            <PermissionCard permission={permission} clickHandler={deletePermissionHandler} key={permission.id}/>
        );
    });
    return(
        <div className="main">
            <div className="heading">
            <h2>Permission List</h2>
       <Link to="/add" > <button className="button" >Add Permission</button></Link>
        </div>
        <div className="list"> {renderPermission}</div>
        </div>
    )
}