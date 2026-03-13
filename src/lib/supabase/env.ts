const NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";

export interface SupabasePublicEnv {
  url: string;
  anonKey: string;
  isConfigured: boolean;
}

export function getSupabasePublicEnv(): SupabasePublicEnv {
  return {
    url: NEXT_PUBLIC_SUPABASE_URL,
    anonKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
    isConfigured:
      NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
      NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 0,
  };
}

export function assertSupabasePublicEnv() {
  const env = getSupabasePublicEnv();

  if (!env.isConfigured) {
    throw new Error(
      "Missing Supabase public environment variables. Copy .env.example and set NEXT_PUBLIC_SUPABASE_URL plus NEXT_PUBLIC_SUPABASE_ANON_KEY before enabling contact features.",
    );
  }

  return env;
}
