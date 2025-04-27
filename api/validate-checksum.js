export default function handler(req, res) {
  const { checksum } = req.query;
  const validChecksums = ["OVERRIDE-C7E3-LAMRI-AI-INFINITY", "SEAL-CHECKSUM-7A9D-LAMRI-CORE"];
  if (validChecksums.includes(checksum)) {
    res.status(200).json({ status: "valid", checksum });
  } else {
    res.status(403).json({ status: "invalid", checksum });
  }
}
