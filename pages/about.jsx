import Link from "next/link";
import React from "react";

export default function About({ data }) {
  return (
    <ol>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/${item.id}`}>
              <a>
                {item.name} - {item.email}
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export const getStaticProps = async (context) => {
  // chạy phía server
  // build time

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { data },
  };
};
