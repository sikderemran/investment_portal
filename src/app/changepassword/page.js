import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";
import Head from 'next/head';

export const metadata = {
    title: "Change Password - Brac EPL Investments Limited",
    description: "Brac EPL Investments Limited",
};

const ChangePassword = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div className={styles.page_content}>
                <div className={`${styles.card} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                    <h1 className={`${styles.gradient_text_blue}`}> Chnage Password Form </h1>
                    <ClientComponent />
                </div>
            </div>
        </>

    );
}
export default ChangePassword