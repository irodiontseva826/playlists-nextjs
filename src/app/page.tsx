import Image from "next/image";
import styles from "./page.module.css";
import { Playlist } from "./types";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/playlists", {
    cache: "no-store",
  });

  const playlists: Playlist[] = await res.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link href={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
