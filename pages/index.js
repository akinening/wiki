import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Design Wiki | UX, UIのデザインWiki</title>
        <meta name="description" content="Design Wikiは、UX及びUIのデザインについて、知見をまとめるWikiです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Design Wiki
        </h1>

        <p className={styles.description}>
          UX及びUIのデザインについて、知見をまとめるWikiです。
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>定性調査 &rarr;</h2>
            <p>ユーザーインタビュー / エスノグラフィ / ヒューリスティック評価</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>定量調査 &rarr;</h2>
            <p>統計データ / GA分析 / アンケート</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>AsIs &rarr;</h2>
            <p>ペルソナ / 共感マップ / カスタマージャーニーマップ(AsIs)</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>ToBe &rarr;</h2>
            <p>PSF / PMF / カスタマージャーニーマップ(ToBe)</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://akinen.com" target="_blank" rel="noopener noreferrer">
          Akinen.com
        </a>
      </footer>
    </div>
  );
}
