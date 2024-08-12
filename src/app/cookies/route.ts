import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const theme = request.cookies.get("theme");  // "cookies" property of NextRequest
    console.log(theme);

    cookies().set("cart-items", "0");
    console.log(cookies().get("cart-items"))

    return new Response("Cookie settings", {
        headers: {
            'Content-Type': 'text/plain',
            'Set-Cookie': 'theme=dark',  // set cookie (way 1)
        },
    });
}