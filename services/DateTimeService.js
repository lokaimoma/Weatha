export default function getHours(dateTime) {
  const date = new Date(parseInt(dateTime) * 1000);
  const hour = date.getHours();
  if (hour === 0) {
    return "12 AM";
  } else if (hour > 0 && hour < 12) {
    return `${hour} AM`;
  } else if (hour === 12) {
    return `${hour} PM`;
  } else {
    return `${hour - 12} PM`;
  }
}
