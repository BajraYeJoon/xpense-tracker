import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CurrencySelector } from "@/components/currencySelector/CurrencySelector";
async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <h1 className="text-center text-3xl">
        Welcome to the onboarding page! {user.fullName}
      </h1>
      <h2 className="mt-4 text-center text-base text-muted-foreground">
        Let's get you started with your new account.
      </h2>

      <h3>You can change this page anytime.</h3>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your preferred currency to display prices in your local
            currency.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencySelector />
        </CardContent>
      </Card>

      <Separator />
      <Button className="w-full" asChild>
        <Link href="/">Go To Dashboard</Link>
      </Button>
    </div>
  );
}

export default Page;
