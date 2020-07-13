import React from "react";
import { Link } from "react-router-dom";

const Places = () => {
  const places = [
    {
      id: 0,
      location: "Prespa",
      placeName: "Otesevo",
      img: "photo",
    },
    {
      id: 1,
      location: "Prespa",
      placeName: "Stenje",
      img: "photo2",
    },
  ];

  if (places) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fas-users"></i> ttttPlaces
            </h2>
          </div>
          <div className="col-md-6"></div>
        </div>

        <table className="table table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th>location</th>
                    <th>place name</th>
                    <th>img</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {places.map(place => (
                    <tr key={place.id}>
                        <td>{place.location}</td>
                        <td>{place.placeName}</td>
                        <td>{place.img}</td>
                        <td>
                            <Link to={`/places/${place.id}`}
                            className='btn btn-secondary btn-sm'>
                                <i className="fas fa-arrow-circle-right"></i>Details
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
