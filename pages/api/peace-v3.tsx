// this version would try to add RANDOM colors from the list of peace colors
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default async function handler() {
    // read colors.json and show 7 random colors
    const colors = require("../data/colors.json");
    // pick 7 random colors
    const randomColors = colors.sort(() => 0.5 - Math.random()).slice(0, 7);
    // iterate all the colors
    const colorDivs = randomColors.map((color: any, index: number) => (
        <div
            key={index}
            style={{
                display: "block",
                fontSize: 40,
                color: "black",
                background: color.hex,
                width: "100%",
                height: "89px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {color.name}
        </div>
    ));

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
                {colorDivs}
            </div>
        ),
        {
            width: 1200,
            height: 628,
        }
    );
}
