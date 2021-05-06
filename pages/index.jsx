import React from "react";
import Link from "next/link";
import styles from "../src/styles.module.css";

const Page = () => (
  <div>
    <h1 className={styles.note}>Index Page</h1>
    <Link href="/notes">
      <a>Note</a>
    </Link>
  </div>
);

export default Page;
