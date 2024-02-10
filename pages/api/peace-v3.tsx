// this version would try to add RANDOM colors from the list of peace colors
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#F0F8FF",
                        width: "100%",
                        height: "15",
                        padding: "50px 200px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Tranquil Dawn
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#AEC6CF",
                        width: "100%",
                        height: "15",
                        padding: "50px 200px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Serenity Blue
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 628,
        }
    );
}
