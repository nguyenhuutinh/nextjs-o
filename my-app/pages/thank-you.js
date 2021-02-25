
import styles from '../styles/Home.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Card } from 'antd';
import Head from 'next/head';
import Header from '../components/header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		typeof window !== 'undefined' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : ''
		return () => {
			
		}
	}, [])
	return (
		<div className={styles.container}>
            <Head>
				<title>Green O - Sinh Tố Rau Sạch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header />
            
			<Card className={styles.thankyou_card}>
			<br/><br/>
			<LazyLoadImage src="../images/greeno-logo.png" className={styles.thankyou_logo} effect={'blur'} />
                    <div className={styles.thankyou_text}>Cảm ơn quý khách đã liên hệ. <br/>Bộ Phận CSKH của Green O sẽ liên lạc lại trong thời gian sớm nhất
					<br/><br/>Hotline: 1900 636791
					</div>
		<br/><br/><br/><br/>

            </Card>
            </main>
			<footer className={styles.footer}>
				<LazyLoadImage src="../images/greeno-logo.png" className={styles.footer_logo} effect={'blur'} />
				<div className={styles.footer_content}>
					<b style={{ color: '#185c2b' }}>Green O - Sinh Tố Rau Sạch</b> là thương hiệu thức uống chú trọng
					đến các tiêu chí tươi, sạch, an toàn của nguyên liệu sử dụng nhằm đem lại lợi ích tốt nhất cho làn
					da và vóc dáng của bạn. Tự hào đem đến những sản phẩm an toàn và hiệu quả cao, góp phần tích cực
					trong việc cải thiện sắc vóc và sức khỏe người tiêu dùng Việt.
					<br />
					<br />
					<br />
					Cửa hàng chính: 416A1 Hai Bà Trưng, Phường Tân Định, Quận 1, TP. Hồ Chí Minh<br />
					Chi Nhánh Hà Nội: Toà nhà Việt Đức Complex, 39 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân,
					Thành Phố Hà Nội<br />
					Hotline: 1900 63 67 91 - 090909 60 60 - 090944 80 60<br />
					Email: vietnam@thousandhands.com<br />
				</div>
				<div className={styles.separator}></div>
				<div className={styles.trademak}>Copyright © 2021 Green O - Sinh Tố Rau Sạch. All Rights Reserved.</div>
			</footer>
		</div>
	);
}
