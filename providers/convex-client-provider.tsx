"use client";

import { ClerkProvider, useAuth, SignedIn, SignedOut, RedirectToSignIn ,ClerkLoading} from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey={pk}>
      {/* ConvexProviderWithClerk requires useAuth as a prop */}
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <SignedIn>
          {children} {/* Render content when authenticated */}
        </SignedIn>
        <ClerkLoading>
            <Loading />
        </ClerkLoading>
        <SignedOut>
          <RedirectToSignIn /> {/* Redirect to sign-in if not authenticated */}
        </SignedOut>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
