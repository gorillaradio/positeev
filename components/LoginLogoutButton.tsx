"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { signout } from "@/lib/auth-actions";
import { User } from "@supabase/supabase-js";

const LoginLogoutButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    // Fetch initial user data
    fetchUser();

    // Set up realtime subscription
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  if (user) {
    return (
      <Button
        onClick={async () => {
          await signout();
          setUser(null);
        }}
      >
        Log out
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginLogoutButton;
