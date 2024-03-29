import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: "edge",
};

export default async function handler(req: NextRequest) {
    const data = await req.body;
    const text = `
    <!DOCTYPE html>
    <html>
        <head>
        <meta property="of:accepts:xmtp" content="2024-02-01" />
        <meta property="og:title" content="Colors for the peace" />
        <meta property="og:image" content="https://peace-frame-farcaster.vercel.app/paz.jpg" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="More colors..." />
        <meta property="fc:frame:button:2" content="Colors for the peace" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta property="fc:frame:button:2:target" content="https://www.tomasrawski.com.ar/projects/peace-colors.html" />
        <meta property="fc:frame:post_url" content="https://peace-frame-farcaster.vercel.app/api/home" />
        <meta property="fc:frame:image" content="https://peace-frame-farcaster.vercel.app/api/peace-v3?${Math.random()}" />
        </head>
        <body>
        <image src="https://peace-frame-farcaster.vercel.app/api/peace-v3?${Math.random()}">
        </body>
    </html>
`;

    return new NextResponse(text, {
        headers: {
            "Content-Type": "text/html",
        },
    });
}
