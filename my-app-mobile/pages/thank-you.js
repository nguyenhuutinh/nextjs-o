
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
			<div className={styles.mobileTop}>
			<a href="/"><LazyLoadImage effect="blur" className={styles.toplogo} src="data:image/png;base64,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" /></a>	
			{/* <p>Sinh tố, nước ép xay tươi mỗi ngày<br/>từ rau củ quả chuẩn VietGap</p> */}
			</div>
			<main className={styles.main}>
				{/* <Header /> */}
            
			<Card bordered={false} className={styles.thankyou_card}>
			
			<LazyLoadImage src="../images/greeno-logo.png" className={styles.thankyou_logo} effect={'blur'} />
                    <div className={styles.thankyou_text}>Cảm ơn quý khách đã liên hệ.<br/>Bộ Phận CSKH của Green O sẽ liên lạc lại trong thời gian sớm nhất!
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
