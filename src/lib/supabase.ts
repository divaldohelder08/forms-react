import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://hlrobgchzqoizouixfoj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhscm9iZ2NoenFvaXpvdWl4Zm9qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTIzOTUwNCwiZXhwIjoyMDEwODE1NTA0fQ.Y3z8ZMYubCGH10b2F8aGTjtYOz7Vpx6owHpcecVlUHM"
)