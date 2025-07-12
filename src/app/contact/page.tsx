import Link from "next/link";

export default function BlogsComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
      <h1 className="text-4xl font-bold mb-4">Contact Coming Soon...</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-xl">
        For now, reach out to me on :{" "}
        <Link
          href="https://www.linkedin.com/in/adelin-denis-diac/"
          target="_blank"
          className="text-primary underline hover:no-underline"
        >
          LinkedIn
        </Link>
      </p>
    </div>
  );
}
