import axios from "axios";

function DeleteUser({student, setIsLoading, setIsFail}) {

    const deleteStyle = {
        color: "red",
        cursor: "pointer",
        fontSize: "20px",
        border: "none",
        background: "none",
    };

    function deleteStudent(e, student) {
        e.preventDefault();
        let studentId = student._id;
        axios.delete(`http://localhost:3010/students/${studentId}?_method=DELETE`)
            .then(res => {
                setIsLoading(true);
            })
            .catch(err => {
                setIsFail(true);
            });
    }

    return (
        <>
        <button className="delete" title="Delete" data-toggle="tooltip" style={deleteStyle} data-bs-toggle="modal" data-bs-target={`#deleteModal${student.id}`}>
            <i class="fa-solid fa-trash-can"></i>
        </button>

        <div class="modal fade" id={`deleteModal${student.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <form onSubmit={() => deleteStudent(student)}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete Student</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this student?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
};

export default DeleteUser;