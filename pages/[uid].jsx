import React from "react";

export default function User({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    paths: data.map((x) => {
      return { params: { uid: x.id.toString() } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const uid = context.params?.uid;

  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + uid);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
