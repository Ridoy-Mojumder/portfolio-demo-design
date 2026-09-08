import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b42318",
          color: "#fff7f2",
          fontSize: 14,
          fontFamily: "Georgia, serif",
          letterSpacing: "0.04em",
        }}
      >
        RM
      </div>
    ),
    { ...size },
  );
}
