import './App.css';
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import { connect } from "react-redux";

function App() {
  return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  }
export default connect()(App)