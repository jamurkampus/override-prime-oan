export default function handler(req, res) {
  const { event, actor } = req.body;
  console.log(`[Override Event] Actor: ${actor}, Event: ${event}`);
  res.status(200).json({ status: "event logged" });
}
