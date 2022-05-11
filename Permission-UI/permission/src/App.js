
import React,{useState,useEffect} from "react";

import axios from "axios";
import {UpdatePermission} from './Componets/updatePermission';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import { Header } from "./Componets/Header";
import { AddPermission } from "./Componets/AddPermission";
import './index.css';
import { PermissionList } from "./Componets/PermissionList";
const { v4: uuidv4 } = require('uuid');





function App() {
  const LOCAL_STORAGE_KEY="permissions"
  const [permissions , setPermissions] =useState([]);

  //Retrive Permission
  const retrievePermissions = async()=>{
    const response= await axios.get(`http://localhost:3006/permissions`);
    return response.data;
  }

const addPermissionHandler =async (permission)=>{
      console.log(permission);
      const request ={
        id:uuidv4(),
        ...permission
      }
      const response=await axios.post("http://localhost:3006/permissions",request)
      setPermissions([...permissions,response.data])
};

const updatePermissionHandler=async(permission)=>{
      const response=await axios.put(`http://localhost:3006/permissions/${permission.id}`,permission);
      const {id,emailId,tenantName,permissionType,createdOn}=response.data;
      setPermissions(permissions.map(permission=>{
        return permission.id===id ? {...response.data} : permission;
      }));
}

useEffect(async()=>{
  //const retrievePermission=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 // if(retrievePermission) setPermissions(retrievePermission);
 
 const getAllPermissions= async ()=>{
   const allPermissions=await retrievePermissions();
   if(allPermissions) setPermissions(allPermissions);
 };
 getAllPermissions();
},[]);

const removePermissionHandler =async(id) =>{
  await axios.delete(`http://localhost:3006/permissions/${id}`)
  const newPermissionList = permissions.filter((permission)=>{
    return permission.id !==id;
    
  });
  setPermissions(newPermissionList);
}

useEffect(()=>{
  //localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(permissions));
},[permissions]);

  return (
    <>
    <div className="uicontainer">
      <Router>
      <Header/>
        <Switch>
      
      <Route exact path="/add" render={
        (props) =>(<AddPermission {...props} addPermissionHandler={addPermissionHandler}/>)
      }/>
       <Route exact path="/update" render={
        (props) =>(<UpdatePermission {...props} updatePermissionHandler={updatePermissionHandler}/>)
      }/>
      <Route exact path="/" render={
        (props) =>(<PermissionList {...props} 
          permissions={permissions} getPermissionId={removePermissionHandler}/>)
      }/>
     
      </Switch>
      </Router>
    
    </div>
    </>
  );
}

export default App;
//{ *<AddPermission addPermissionHandler={addPermissionHandler}/>*}//
//<PermissionList permissions={permissions} getPermissionId={removePermissionHandler}/>
//<Route path="/add" component={AddPermission}/>
//<Route path="/" component={PermissionList} />