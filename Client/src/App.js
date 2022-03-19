import {useState, useEffect} from 'react';
import axios from 'axios';
import {nanoid} from 'nanoid';

import Student from "./components/Student";

import AddNew from './components/AddNew';
import Import from './components/Import';

import Pagination from './components/Pagination';

function App() {
  // Student states
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);
  const [studentCount, setStudentCount] = useState(0);

  // Render & reload states
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  // Pagination states
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3010/students?page=${page}`)
      .then(res => {
        setStudents(res.data.students);
        setStudentCount(res.data.totalStudents);
        setTotalPages(Math.ceil(res.data.totalStudents / res.data.students.length));
        setIsLoading(false);
      })
      .catch(err => {
        setIsFail(true);
        setIsLoading(false);
      });
  }, [page]);

  return (<>
    {isLoading && <div className="spinner-border text-primary" role="status">
      <h1>LOADING</h1>
    </div>}

    {!isLoading && <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>Student <b>Management</b></h2>
              </div>
              <div className="col-sm-7">
                <AddNew />
                <Import />
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Team</th>						
                <th>Country</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>D.O.B.</th>
                <th>Hometown</th>
                <th>Province</th>
                <th>Is Verified</th>
                <th>Age</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => {
                return (
                  <Student student={student} key={nanoid()} />
                )
              })}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">Showing <b>{students.length}</b> out of <b>{studentCount}</b> entries</div>
            <ul className="pagination">
              <Pagination page={page} setPage={setPage} totalPages={totalPages} />
            </ul>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default App;
