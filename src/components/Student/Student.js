import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Student = () => {
  const [ studentInfo, setStudentInfo ] = useState({});
  const { id: idParam } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3005/students/${ idParam }`)
      .then(results => setStudentInfo(results.data))
      .catch(error => console.error(error));
  }, [ idParam ]);

  


  return (
    <div className="box">
      <h1>Student</h1>
      <h1>{ studentInfo.first_name } { studentInfo.last_name }</h1>
      <h3>Grade: { studentInfo.grade }</h3>
      <h3>Email: { studentInfo.email }</h3>
    </div>
  );
}

export default Student;








// import React, { Component } from 'react';

// export default class Student extends Component {
//   constructor() {
//     super()

//   }

//   render() {
//     return (
//       <div className="box">
//         <h1>Student</h1>
//       </div>
//     )
//   }
// }