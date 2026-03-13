import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  assertSupabasePublicEnv,
  getSupabasePublicEnv,
} from "@/lib/supabase/env";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  const env = getSupabasePublicEnv();

  if (!env.isConfigured) {
    return null;
  }

  browserClient ??= createClient(env.url, env.anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        "X-Client-Info": "portfolio-zibe-contact-placeholder",
      },
    },
  });

  return browserClient;
}

export function requireSupabaseBrowserClient() {
  const env = assertSupabasePublicEnv();

  browserClient ??= createClient(env.url, env.anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return browserClient;
}
