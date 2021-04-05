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
import { useEffect, useState } from 'react';
import Benefit from '../containers/benefit';

export default function Home() {
	const [ visible, setVisisble ] = useState(false);
	const [ pos, setPos ] = useState(2);
	var videoheight = typeof window !== 'undefined' ? `${window.innerHeight/5*2}px` : '300px'
	const [touchDevice, setTouchDevice] = useState(false);
	
	const onTouchStart = ()=>{
		setTouchDevice(true)
	}

	const openMessenger = ()=>{
		typeof window !== 'undefined'  && (window.location.href="https://m.me/greenosinhtorausach?ref=landing_page_giam_can")
	}
	return (
		<div className={styles.container} onTouchStart={onTouchStart}>
			<Head>
				<title>Green O - Sinh Tố Rau Sạch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header /> */}

			<div className={styles.mobileTop}>
			<a href="/"><LazyLoadImage effect="blur" className={styles.toplogo} src="../images/logo2.png" /></a>		
			<p>Sinh tố, nước ép xay tươi mỗi ngày<br/>từ rau củ quả chuẩn VietGap</p>
			</div>
			<main className={styles.main}>
				
				<LazyLoadImage
					effect="blur"
					className={styles.banner1}
					src="../images/banner1.jpg"
					placeholderSrc={'../images/banner1_pre.jpg'}
				/>
				<div className={styles.introvideo} >
					<div className={styles.buttonpart}>
						<a onClick={() => openMessenger()}>
							<LazyLoadImage effect="blur" className={styles.button} src="../images/button-1.png" />
						</a>
					</div>
					<div className={styles.videopart}>
						<div className={styles.left}>
							{/* <LazyLoadImage
								src="../images/greeno-logo.png"
								className={styles.video_logo}
								effect={'blur'}
							/> */}
							{/* <br /> */}
							{/* <br /> */}
							<div className={styles.text1}>Phóng Sự<br/>Góc Nhìn Người Tiêu Dùng VTC2</div>

							
						</div>
						<div className={styles.right}>
							<iframe
								loading="lazy"
								width="95%"
								height={videoheight}
								src="https://www.youtube.com/embed/Kz76S_h-76Y"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
				{ <Feature /> }
				{<LazyLoadImage
					effect="blur"
					className={styles.banner2}
					src="../images/banner2.jpg"
					placeholderSrc={'../images/banner2-pre.jpg'}
				/>}
				{<Review />}
				{<Quiz
					setPos={(pos) => setPos(pos)}
					showForm={() => {
						openMessenger()
					}}
					pos={pos}
				/>}
				{<div className={styles.introvideo2} >
					
					<div className={styles.videopart}>
						<div className={styles.left}>
							
							<div className={styles.text1}>Quy Trình Chế Biến</div>
							
							<LazyLoadImage
								src="../images/greeno-logo.png"
								className={styles.video_logo}
								effect={'blur'}
							/>
							<br />
							<br />
						</div>
						<div className={styles.right}>
							<iframe
								loading="lazy"
								width="95%"
								height={videoheight}
								src="https://www.youtube.com/embed/lAa19qAMzpU"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>}
				
				<div className={styles.separator}></div>
				{<Products
					onShowForm={(pos) => {
						setPos(pos);
						openMessenger()
					}}
				/>}
				{<Benefit/>}
				{<Promotion />}
				{<Promotion7Days callback={(bool) => openMessenger()} />}
				<Modal
					closable={false}
					
					visible={visible}
					width={'95%'}
					centered
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
			<a href="tel:1900636791" className={styles.hotline}> <img src="../images/hotline.png" className={styles.hotline_img }effect={'blur'} /></a>
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
					<br />
					Chi Nhánh Hà Nội: Toà nhà Việt Đức Complex, 39 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân,
					Thành Phố Hà Nội<br />	<br />	<br />
					Hotline: 1900 63 67 91 - 090909 60 60 - 090944 80 60<br />
					Email: vietnam@thousandhands.com<br />
				</div>
				<div className={styles.separator}></div>
				<div className={styles.trademak}>Copyright © 2021 Green O - Sinh Tố Rau Sạch.<br/>All Rights Reserved.</div>
			</footer>
			
		</div>
	);
}
