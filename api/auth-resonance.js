export default function handler(req, res) {
  const token = req.headers["x-override-token"];
  if (token === "LAMRI-OVERRIDE-TOKEN") {
    res.status(200).json({ status: "authorized" });
  } else {
    res.status(401).json({ status: "unauthorized" });
  }
}
