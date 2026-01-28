import styles from "./page.module.css";
import { PlaylistDataType } from "./types";
import Playlist from "@/components/Playlist/Playlist";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/playlists", {
    cache: "no-store",
  });

  const playlists: PlaylistDataType[] = await res.json();

  return (
    <>
      <h1>Мои плейлисты</h1>
      <ul className={styles.playlists}>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Playlist data={playlist} />
          </li>
        ))}
      </ul>
    </>
  );
}
