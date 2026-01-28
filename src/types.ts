export interface TrackDataType {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

export interface PlaylistDataType {
  id: string;
  title: string;
  trackCount: number;
  cover: string;
  tracks: TrackDataType[];
}
