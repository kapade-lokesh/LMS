import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  plugins: [emailOTPClient(), adminClient()],
});

//this is used to commuicate with the CSR components
