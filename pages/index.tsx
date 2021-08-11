import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useCallback, useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  const [userList, setUserList] = useState([]);

  const getUserList = useCallback(async () => {
    const response = await fetch(
      "https://nestjs-prisma-psql.herokuapp.com/user/list"
    );
    const data = await response.json();
    setUserList(data);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          {userList.map((u) => {
            return (
              <li key={u.id}>
                <p>
                  {u.name} {u.tel}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/material`}>
              <a>Material UI</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/antd`}>
              <a>Ant Design</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/chakra`}>
              <a>Chakra UI</a>
            </Link>
            <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}
