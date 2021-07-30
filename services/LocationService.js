export default function getLocationData(locationDetailsSetter) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (postion) => {
        locationDetailsSetter({
          latitude: postion.coords.latitude,
          longitude: postion.coords.longitude,
        });
      },
      (_) => {
        locationDetailsSetter({
          error: "Error fetching location",
        });
      }
    );
  } else {
    locationDetailsSetter({
      error: "Location service not supported",
    });
  }
}
