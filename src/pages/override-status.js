import { overrideConfig } from '../config/overrideConfig';
export default function OverrideStatus() {
  return {
    status: "Override Node Active",
    identity: overrideConfig.identity,
    checksum: overrideConfig.checksum
  };
}
