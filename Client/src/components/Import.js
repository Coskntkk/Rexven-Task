import axios from "axios";

function Import({setIsLoading, setIsFail}) {

    function importFile(e){
        e.preventDefault();
        // Send file to server
        const form = e.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        axios.post("http://localhost:3010/import", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            setIsLoading(true);
        })
        .catch(err => {
            setIsFail(true);
        });
        
    }

    return (
        <>
        <button className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#importFile">
            <i className="material-icons">&#xE24D;</i>
            <span>Import From File</span>
        </button>
    
        <div className="modal fade" id="importFile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color: "black"}}>
            <div className="modal-dialog">
                <form onSubmit={(e) => importFile(e)}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Import From File</h5>
                            <p>Only .xlsx and .csv are supported.</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">File</label>
                                <input type="file" className="form-control" name="file" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Import</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
};

export default Import;