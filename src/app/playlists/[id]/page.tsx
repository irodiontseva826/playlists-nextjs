import { PlaylistDataType } from "@/app/types";
import styles from "../../page.module.css";
import Track from "@/components/Track/Track";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page(props: PageProps) {
  const { id } = await props.params;
  const res = await fetch(`http://localhost:3000/api/playlists/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Плейлист не найден</h1>;
  }

  const playlist: PlaylistDataType = await res.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={`${playlist.cover}`}
          alt={`Обложка плейлиста "${playlist.title}"`}
          width={100}
          height={100}
        />
        <h1>{playlist.title}</h1>
        <ul>
          {playlist.tracks.map((track) => (
            <li key={track.id}>
              <Track data={track} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
