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
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Green O- Sinh Tố Rau Sạch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header />
				<LazyLoadImage effect="blur" className={styles.banner1} src="../images/banner1.jpg" placeholderSrc={"../images/banner1_pre.jpg"}/>
				<div className={styles.introvideo}>
					<div className={styles.buttonpart}>
						<a href="#">
							<LazyLoadImage effect="blur" className={styles.button} src="../images/button-1.png" />
						</a>
					</div>
					<div className={styles.videopart}>
						<div className={styles.left} >
              <LazyLoadImage src="../images/greeno-logo.png" className={styles.video_logo} effect={"blur"}/>
              <br/>
              <br/>
              <div className={styles.text1}>Phóng Sự Góc Nhìn Người Tiêu Dùng</div>
              <br/>
              <div className={styles.text2}>VTC2</div>
            </div>
						<div className={styles.right}>
							<iframe
								width="100%"
								height={typeof window !== 'undefined' ? window.innerHeight / 3 * 2 : "500px"}
								src="https://www.youtube.com/embed/Kz76S_h-76Y"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/>
						</div>
					</div>
				</div>
				<LazyLoadImage effect="blur" className={styles.banner1} src="../images/banner2.jpg" />

        <Feature/>
        <Review/>
        <Quiz/>
        <Products/>
        <Promotion/>
        <Promotion7Days/>
			</main>

			<footer className={styles.footer}>
			
			</footer>
		</div>
	);
}
