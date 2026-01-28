import { TrackDataType } from "@/app/types";
import { formatDuration } from "@/utils/formatDuration";
import styles from "./Track.module.css";

const Track = ({
  data: { title, artist, duration },
}: {
  data: TrackDataType;
}) => {
  const { display, dateTime } = formatDuration(duration);
  return (
    <div className={styles.track}>
      <div>
        <h2>{title}</h2>
        <span>{artist}</span>
      </div>
      <time dateTime={dateTime}>{display}</time>
    </div>
  );
};

export default Track;
