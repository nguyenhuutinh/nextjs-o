import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Promotion = () => {
	
	return (
		<div className={classes.promotion}>
			<div className={classes.left} style={{backgroundImage:"url(../images/goidinhky_2.jpg)"}}>
				<div className={classes.promotion_title}>
					<h3>Ưu Đãi </h3>
					<h5>khi sử dụng gói định kỳ</h5>
				</div>
					<div className={classes.promotion_button}>
						Giao Hàng Tận Nơi Mỗi Ngày
					</div>
					<div  className={classes.promotion_button}>
						Ưu Đãi Phí Ship
					</div>
					<div  className={classes.promotion_button}>
						Ưu Đãi Về Giá
					</div>
					
					<p  className={classes.promotion_hint}>Được Các Chuyên Viên Dinh Dưỡng tư vấn và theo dõi tận tình trong suốt liệu trình giảm cân</p>
			</div>
			<div className={classes.right} >
			<LazyLoadImage className={classes.image_promotion} src="../images/goidinhky_1.jpg" placeholderSrc={"../images/goidinhky_1_pre.jpg"}/>
			</div>
		</div>
	);
};

export default Promotion;
