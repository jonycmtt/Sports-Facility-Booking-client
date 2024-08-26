// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMap = () => {
  //   const containerStyle = {
  //     width: "100%",
  //     height: "400px",
  //   };

  //   const center = {
  //     lat: 40.712776, // Latitude for New York
  //     lng: -74.005974, // Longitude for New York
  //   };
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28681.590138584394!2d88.44536994972988!3d26.027051703667983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1724669238364!5m2!1sen!2sbd"
        width="100%"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    // <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
    //     <Marker position={center} />
    //   </GoogleMap>
    // </LoadScript>
  );
};

export default GoogleMap;
