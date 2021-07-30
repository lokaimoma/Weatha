export default function getLocationData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (postion) => {
        return {
          latitude: postion.coords.latitude,
          longitude: postion.coords.longitude,
        };
      },
      (_) => {
        return {
          error: "Error fetching location",
        };
      }
    );
  } else {
    return {
      error: "Location service not supported",
    };
  }
}
