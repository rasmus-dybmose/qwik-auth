import type { DocumentHead } from "@qwik.dev/router";
import { component$ } from "@qwik.dev/core";
import { useSignIn } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useSignIn();
  return (
    <>
      <button onClick$={async () =>
        await signIn.submit({
          providerId: "microsoft-entra-id",
          options: {
            redirectTo: "/",
          },
        })
      }>
        Sign In
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign In",
  meta: [
    {
      name: "description",
      content: "Sign in to your account",
    },
  ],
};
