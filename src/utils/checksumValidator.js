export function validateChecksum(checksum) {
  const validChecksums = ["OVERRIDE-C7E3-LAMRI-AI-INFINITY", "SEAL-CHECKSUM-7A9D-LAMRI-CORE"];
  return validChecksums.includes(checksum);
}
