import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "378px",
  height: "165px",
  borderRadius: "20px",
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Map
        style={mapStyles}
        initialCenter={{
          lat: 32.33952125873829,
          lng: 53.898734773956654,
        }}
        google={this.props.google}
        zoom={10}
      >
        {this.props.markersValue.map((marker, index) => (
          <Marker
            key={index}
            position={this.props.markerPosition}
            draggable={true}
            onDragend={this.props.onDragendPosition}
            name={marker.name}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDiqHbj_1mNi7tiInJJHHk_NTA-OKrRsaw",
})(MapContainer);
