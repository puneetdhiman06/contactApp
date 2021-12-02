
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Swtich,Route}from "react-router-dom"
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import Addcontact from "./AddContact";

function App() {
const LOCAL_STORAGE_KEY = "contacts";
 const [contacts,setContacts]=useState([]);

 const addContactHandler=(contact)=> 
 { console.log(contact);
   setContacts([...contacts, {id:uuid(),...contact}])
  };

 const removeContactHandler = (id)=> {
   const newContactList = contacts.filter((contact)=>{
     return contact.id !==id;
   });
   setContacts(newContactList);
 };
 useEffect(()=>
 {
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveContacts)setContacts(retriveContacts); 
  }, []);

 useEffect(()=>
 {
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
 }, [contacts]);
 return (
    <div>
      <Router>
      <Header/>
      <Route path="/add" component={Addcontact}/>
      <Route path="/" component={ContactList}/>
      {/* <Addcontact addContactHandler={addContactHandler}/> */}
      {/* <ContactList contact={contacts} getContactId={removeContactHandler} />     */}
      </Router>
    </div>
  );
}

export default App;
