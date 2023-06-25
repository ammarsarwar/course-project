import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://opfvxycvbyharwbyxqfk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZnZ4eWN2YnloYXJ3Ynl4cWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3Mjc1NjUsImV4cCI6MjAwMzMwMzU2NX0.mu3096x1lFg7Nzw92jqfjSl_XgTNXdd8wnNcanc7byQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
