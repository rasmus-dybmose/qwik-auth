import { QwikAuth$ } from "@auth/qwik";
import MicrosoftEntraID from "@auth/qwik/providers/microsoft-entra-id";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      MicrosoftEntraID({}),
    ],
  }),
);
