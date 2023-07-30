import Link from "next/link";

export default function User() {
    return (
      <div>
        User page inside dashboard
        <Link className="link" href='/products'>Go to products page</Link>
      </div>
    );
  }
  