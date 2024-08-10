import { users } from "../users";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const user = users.find((user) => user.id === parseInt(params.id))
    return Response.json(user);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const userIndex = users.findIndex((user) => user.id === parseInt(params.id))
    const { name } = body;
    users[userIndex].name = name;
    return Response.json(users[userIndex]);
}