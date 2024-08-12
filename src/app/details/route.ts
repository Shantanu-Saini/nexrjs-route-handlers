export const dynamic = ("force-dynamic")

export async function GET() {
    const date = new Date();
    const time = date.toLocaleTimeString()
    return new Response(time);
}