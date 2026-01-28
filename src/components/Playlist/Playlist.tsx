import { PlaylistDataType } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const Playlist = ({
  data: { id, title, trackCount, cover },
}: {
  data: PlaylistDataType;
}) => (
  <Link href={`/playlists/${id}`}>
    <article>
      <Image
        src={`${cover}`}
        alt={`Обложка плейлиста "${title}"`}
        width={100}
        height={100}
      />
      <h2>{title}</h2>
      <span>Количество треков: {trackCount}</span>
    </article>
  </Link>
);

export default Playlist;
