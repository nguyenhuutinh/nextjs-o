import React, { Component, useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Promotion7Days = ({ callback }) => {
	var videoheight = typeof window !== 'undefined' ? `${window.innerHeight / 5 * 2}px` : '300px';
	return (
		<div className={styles.promotion7days}>
			<div className={styles.videopart2}>
				<div className={styles.left}>
					<div className={styles.text1}>Giải Pháp Hỗ Trợ Giảm Cân An Toàn </div>

					<div className={styles.text2}>Từ 7 - 14 Ngày</div>

					<div className={styles.text3}>Cùng Green O</div>
				</div>
				<div className={styles.right}>
					<iframe
						width="95%"
						height={videoheight}
						src="https://www.youtube.com/embed/_GYDGjLBmfg"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>

			<div className={styles.buttonpart}>
				<a onClick={() => callback(true)}>
					<LazyLoadImage effect="blur" className={styles.button} src="../images/button-1.png" />
				</a>
			</div>
		</div>
	);
};

export default Promotion7Days;
