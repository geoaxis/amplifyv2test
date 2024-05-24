import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex main-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto">
      <div className={styles.description}>
        <p>Hello World</p>
      </div>
    </main>
  );
}
