import { users } from "./users";

// GET method
export async function GET() {
    return Response.json(users)
}

// POST method
export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser);
    return new Response(
        JSON.stringify(newUser),  // or // "newuser created", // or // JSON.stringify(user),
        {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    })
}