export default function handler(req, res) {
  res.status(200).json({ status: "Override Node Active", timestamp: new Date().toISOString() });
}
