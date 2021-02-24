
import styles from '../styles/Home.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Card } from 'antd';
import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
	return (
		<div className={styles.container}>
            <Head>
				<title>Green O- Sinh Tố Rau Sạch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header />
            
			<Card>
                    <div style={{fontSize:22, color: 'green', textAlign:'center'}}>Cảm ơn quý khách đã liên hệ. Bộ Phận CSKH của Green O sẽ liên lạc lại trong thời gian sớm nhất</div>


            </Card>
            </main>
		</div>
	);
}
