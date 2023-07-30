import Link from "next/link";

export default function Product() {
  return (
    <div>
      Product page inside shop
      <Link className="link" href="/user">
        Go to user page
      </Link>
    </div>
  );
}
