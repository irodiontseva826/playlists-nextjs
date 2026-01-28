interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

export interface Playlist {
  id: string;
  title: string;
  trackCount: number;
  cover: string;
  tracks: Track[];
}
