import React from "react";
import { Link } from "react-router-dom";
import { placesMock } from "../../App";

const Places = () => {
  
  if (placesMock) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fas-users"></i>
            </h2>
          </div>
          <div className="col-md-6"></div>
        </div>

        <table className="table table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th>Location</th>
                    <th>Place Name</th>
                    {/* <th>Photo</th> */}
                    <th>User</th>
                    <th>Date Created</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {placesMock.map(place => (
                    <tr key={place.id}>
                        <td>{place.location}</td>
                        <td>{place.placeName}</td>
                        {/* <td >{place.img}</td> */}
                        <td>{place.username}</td>
                        <td>{place.date}</td>
                        <td>
                            <Link to={`/places/${place.id}`}
                            className='btn btn-secondary btn-sm'>
                                <i className="fas fa-arrow-circle-right"></i>Edit
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Places;
