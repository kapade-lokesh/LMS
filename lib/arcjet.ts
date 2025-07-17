import "server-only";
import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  shield,
  sensitiveInfo,
  slidingWindow,
} from "@arcjet/next";
import { env } from "./env";

export {
  detectBot,
  fixedWindow,
  protectSignup,
  shield,
  sensitiveInfo,
  slidingWindow,
};

export default arcjet({
  key: env.ARCJET_KEY,
  characteristics: ["fingerprint"],
  rules: [shield({ mode: "LIVE" })],
});
