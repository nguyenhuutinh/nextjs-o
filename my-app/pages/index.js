import Head from 'next/head';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Feature from '../containers/feature';
import Review from '../containers/review';
import Quiz from '../containers/quiz';
import Products from '../containers/products';
import Promotion from '../containers/promotion';
import Promotion7Days from '../containers/promotion7days';
import { Modal } from 'antd';
import { Button } from 'antd';
import RegisterForm from '../components/RegisterForm';
import { useState } from 'react';

export default function Home() {
	const [ visible, setVisisble ] = useState(false);
	const [ pos, setPos ] = useState(2);
	var videoheight = typeof window !== 'undefined' ? `${window.innerHeight/2}px` : '500px'
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Green O - Sinh Tố Rau Sạch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				
				<LazyLoadImage
					effect="blur"
					className={styles.banner1}
					src="../images/banner1.jpg"
					placeholderSrc={'../images/banner1_pre.jpg'}
				/>
				<div className={styles.introvideo} >
					<div className={styles.buttonpart}>
						<a onClick={() => setVisisble(true)}>
							<LazyLoadImage effect="blur" className={styles.button} src="../images/button-1.png" />
						</a>
					</div>
					<div className={styles.videopart} style={{height: videoheight}}>
						<div className={styles.left}>
							<LazyLoadImage
								src="../images/greeno-logo.png"
								className={styles.video_logo}
								effect={'blur'}
							/>
							<br />
							<br />
							<div className={styles.text1}>Phóng Sự Góc Nhìn Người Tiêu Dùng</div>

							<div className={styles.text2}>VTC2</div>
						</div>
						<div className={styles.right}>
							<iframe
								width="100%"
								height={videoheight}
								src="https://www.youtube.com/embed/Kz76S_h-76Y"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
				<LazyLoadImage
					effect="blur"
					className={styles.banner2}
					src="../images/banner2.jpg"
					placeholderSrc={'../images/banner2-pre.jpg'}
				/>

				<Feature />
				<Review />
				<Quiz
					setPos={(pos) => setPos(pos)}
					showForm={() => {
						setVisisble(true);
					}}
					pos={pos}
				/>
				<Products
					onShowForm={(pos) => {
						setPos(pos);
						setVisisble(true);
					}}
				/>
				<Promotion />
				<Promotion7Days callback={(bool) => setVisisble(bool)} />
				<Modal
					centered
					visible={visible}
					width={'45%'}
					// onOk={()=>{}}
					onCancel={() => {
						setVisisble(false);
					}}
					footer={null}
					destroyOnClose
				>
					<RegisterForm
						pos={pos}
						onCancel={() => {
							setVisisble(false);
						}}
					/>
				</Modal>
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
