import { Playlist } from "@/app/types";
import styles from "../../page.module.css";

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

  const playlist: Playlist = await res.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{playlist.title}</h1>
        <ul>
          {playlist.tracks.map((track) => (
            <li key={track.id}>{track.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
