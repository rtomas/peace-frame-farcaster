// this version would try to add colors and replicate the original image
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
                        height: "89px",
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
                        height: "89px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Serenity Blue
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#D4E7D6",
                        width: "100%",
                        height: "89px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Gentle Harmony
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#C2D8E4",
                        width: "100%",
                        height: "89px",

                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Ethereal Mist
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#D8E6C5",
                        width: "100%",
                        height: "89px",

                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Peaceful Meadows
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#BFE2D9",
                        width: "100%",
                        height: "89px",

                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Calm Oasis
                </div>
                <div
                    style={{
                        display: "block",
                        fontSize: 40,
                        color: "black",
                        background: "#C7E6C3",
                        width: "100%",
                        height: "89px",

                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Tranquility Green
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 628,
        }
    );
}
