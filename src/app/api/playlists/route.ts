import { PLAYLISTS } from "@/app/constants";

export async function GET() {
  return Response.json(PLAYLISTS);
}
