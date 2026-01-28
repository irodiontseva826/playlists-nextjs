export function formatDuration(duration: string) {
  const [min, sec] = duration.split(":").map(Number);
  return {
    display: `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`,
    dateTime: `PT${min}M${sec}S`,
  };
}
