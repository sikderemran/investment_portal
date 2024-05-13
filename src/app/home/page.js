import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";

export default function Home() {
  return (
    <div className={'container '+styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.page_content}>
          <div className={`${styles.card} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
            <h1 className={`${styles.gradient_text_blue}`}> Information Account </h1>
            <ClientComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
