import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gray-300 hero-image">
          <Image
            src="/hero-image.jpg" // Replace with your hero image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 py-24 px-8 text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor cursus.
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <p>Hello World</p>
      </div>
    </main>
  );
}

