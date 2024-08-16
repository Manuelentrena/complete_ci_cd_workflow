import flagsmith from "@/utils/flagsmith";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Fix Bug</h2>

        {flags.isFeatureEnabled("search") && (
          <div>
            <label htmlFor="input_flag">Input Flat</label>
            <input
              id="input_flag"
              name="input_flag"
              placeholder="example feature flag"
            />
          </div>
        )}
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
