import { PLAYLISTS } from "@/app/constants";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const playlist = PLAYLISTS.find((pl) => pl.id === id);

  if (!playlist) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(playlist);
}
