import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  plugins: [emailOTPClient()],
});

//this is used to commuicate with the CSR components
