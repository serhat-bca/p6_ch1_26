import React from "react";

const Contact = ({contact}) => {
  console.log("Contact object", contact);
  return (
    <div>
      <div>Name: {contact.name}</div>
      <div>DOB: {contact.dob}</div>
      <div>State: {contact.state}</div>
      {/* React doesn't like objects as child elements */}
      {/* <div>Full Contact Card: {props.contact}</div> */}
      <hr />
    </div>
  );
};

// const Contact = (props) => {
//   console.log("Contact object", props.contact);
//   return (
//     <div>
//       <div>Name: {props.contact.name}</div>
//       <div>DOB: {props.contact.dob}</div>
//       <div>State: {props.contact.state}</div>
//       {/* React doesn't like objects as child elements */}
//       {/* <div>Full Contact Card: {props.contact}</div> */}
//       <hr />
//     </div>
//   );
// };

const App = () => {
  const jw = { name: "John Wick", dob: "1981", state: "IL" };

  // javascript tutorial how to destructure an object
  const { name, dob, state } = jw;
  console.log(`This is from object destructuring: ${name}, ${dob}, ${state}`);
  return (
    <div>
      <h2>Contacts</h2>
      <Contact contact={jw} />
      {/* <Contact name="John Wick" dob="1981" state="IL" /> */}
      {/* <Contact name="Neo" dob="1980" state="NY" /> */}
    </div>
  );
};

export default App;
