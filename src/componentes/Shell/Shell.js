import styles from "./Shell.css";

export default function Shell({ children }) {
  return (
    <div className={styles.page}>
      <aside className={styles.hero}>
        <img src="/itau-badge.png" alt="Itaú" className={styles.badge}/>
      </aside>

      <main className={styles.panel}>
        <header className={styles.topbar}>
          <div className={styles.locale}><span role="img" aria-label="globo">🌐</span> BR</div>
          <a className={styles.closeBtn} href="#"><span>✕</span><span className={styles.closeTxt}>Close</span></a>
        </header>

        <div className={styles.content}>
          {children}
        </div>

        <footer className={styles.footer}>
          <span>2025 – Itaú Private Bank. All rights reserved.</span>
          <a href="#" className={styles.pp}>Privacy Policy</a>
        </footer>
      </main>
    </div>
  );
}