import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // // request headers
    // // way 1: to read request headers
    // const requestHeader = new Headers(request.headers);
    // console.log(requestHeader.get("Authorization"));

    // way 2: to read request headers
    const headerList = headers();
    const authorizationHeader = headerList.get("Authorization");
    console.log(authorizationHeader);
    
    
    // return new Response("Profile Section")

    // response headers
    return new Response("<h1>Profile Section</h1>", {
        headers: {
            "Content-Type": "text/html",
        },
    });
}