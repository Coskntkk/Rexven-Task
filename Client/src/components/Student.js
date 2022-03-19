import UpdateStudent from "./UpdateStudent";
import DeleteUser from "./DeleteUser";

function Student({ student }) {
    return (
        <tr>
            <td><b>{student.id}</b></td>
            <td>{student.team}</td>
            <td>{student.country}</td>
            <td><b>{student.firstName}</b></td>
            <td><b>{student.lastName}</b></td>
            <td>{student.dateOfBirth}</td>
            <td>{student.hometown}</td>
            <td>{student.province}</td>
            <td>{student.isVerified ? "True" : "False"}</td>
            <td>{student.age}</td>
            <td>
                {/* <UpdateStudent student={student} />
                <DeleteUser student={student} /> */}
            </td>
        </tr>
    )
};

export default Student;