import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: "black",
                    background: "white",
                    width: "100%",
                    height: "100%",
                    padding: "50px 200px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                Paz - Paix - Frieden - Pace - Мир - 平和 - שלום - سلام
            </div>
        ),
        {
            width: 1200,
            height: 628,
        }
    );
}
