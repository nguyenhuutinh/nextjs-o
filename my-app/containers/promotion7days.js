import React, { Component, useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Promotion7Days = ({callback}) => {
	var videoheight = typeof window !== 'undefined' ? `${window.innerHeight /3 * 2 }px` : '500px'
	return (
		<div className={styles.promotion7days} >
			<div className={styles.videopart2} style={{height: videoheight}}>
						<div className={styles.left} >
			<div className={styles.text1}>Green O hỗ trợ bạn giảm cân an toàn     </div>
              
              <div className={styles.text2}>trong 7 - 14 ngày</div>
              
              <div className={styles.text3}>như thế nào</div>
            </div>
						<div className={styles.right}>
							<iframe
								width="100%"
								height={videoheight}
								src="https://www.youtube.com/embed/_GYDGjLBmfg"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
							/>
						</div>
					</div>

					<div className={styles.buttonpart}>
						<a onClick={()=>callback(true)}>
							<LazyLoadImage effect="blur" className={styles.button} src="../images/button-1.png" />
						</a>
					</div>	
		</div>
	);
};

export default Promotion7Days;
