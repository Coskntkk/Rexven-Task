import axios from "axios";

function AddNew({ setIsLoading, setIsFail }) {
    function addStudent(e) {
        e.preventDefault();
        // Get form values and send to server
        const form = e.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);
        axios
            .post("http://localhost:3010/students", data)
            .then((res) => {
                setIsLoading(true);
            })
            .catch((err) => {
                setIsFail(true);
            });
    }

    return (
        <>
            <button
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#addStudent"
            >
                <i className="material-icons">&#xE147;</i>
                <span>Add New Student</span>
            </button>

            <div
                className="modal fade"
                id="addStudent"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ color: "black" }}
            >
                <div className="modal-dialog">
                    <form onSubmit={(e) => addStudent(e)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Add New Student
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">
                                        ID Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="id"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Team</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="team"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="dateOfBirth"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Hometown
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="hometown"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Province
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="province"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Is Verified?
                                    </label>{" "}
                                    <br />
                                    <label
                                        htmlFor="isVerified"
                                        className="custom-control custom-radio"
                                    >
                                        Yes
                                    </label>
                                    <input
                                        type="checkbox"
                                        value="true"
                                        name="isVerified"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        min={1}
                                        max={100}
                                        name="age"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddNew;
