import { Button } from "@/components/ui/button";
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignUpButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
  <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
    <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <Image src="download.svg" fill alt="ReadNRiseLogo"/>
    </div>
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[600px] text-center">Welcome to Read n Rise
      </h1>
      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" fallbackRedirectUrl="/read"> 
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" fallbackRedirectUrl="/read"> 
              <Button size="lg" variant="primaryOutline" className="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/read">
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>      
      </div>
    </div>
  </div>
 )
}