import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ClassList = () => {
  const [students, setStudents] = useState([]);
  const { class: classParam } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/students?class=${ classParam }`)
      .then(results => setStudents(results.data))
      .catch(error => console.error(error));
  }, [ classParam ]);


  return (
    <div className="box">
      <h1></h1>
      <h2>ClassList:</h2>
      {students.map(student => (
        <Link to={`/student/${student.id}`} key={ student.id }>
          <h3>{ student.first_name } { student.last_name }</h3>
        </Link>
      ))}
    </div>
  );
}

export default ClassList;



// import React, { Component } from "react";
// import axios from "axios";

// export default class ClassList extends Component {
//   constructor() {
//     super();

//     this.state = {
//       students: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(
//         `http://localhost:3005/students?class=${this.props.match.params.class}`
//       )
//       .then(results => {
//         this.setState({
//           students: results.data
//         });
//       });
//   }

//   render() {
//     const students = this.state.students.map((student, i) => (
//       <h3 key={i}>
//         {student.first_name} {student.last_name}
//       </h3>
//     ));

//     return (
//       <div className="box">
//         <h1>{this.props.match.params.class}</h1>
//         <h2>ClassList:</h2>
//         {students}
//       </div>
//     );
//   }
// }