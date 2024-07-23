export function formatDate(isoDateString: Date) {
  // Create a Date object from the ISO date string
  const date = new Date(isoDateString);

  // Get the day, month, year, hours, minutes, and seconds
  const day = date.getDate(); // Day of the month (1-31)
  const month = date.getMonth() + 1; // Months are zero-based (0-11), so add 1
  const year = date.getFullYear(); // Year
  const hours = date.getHours(); // Hours (0-23)
  const minutes = date.getMinutes(); // Minutes (0-59)

  const padNumber = (number: number) => number.toString().padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${
    hours >= 12 ? "PM" : "AM"
  }`;

  return { date: formattedDate, time: formattedTime };
}
