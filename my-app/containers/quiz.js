import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Quiz = () => {
	
	return (
		<div className={classes.quiz}>
			<div className={classes.right}>
				<div>
				<h4>Bạn chọn <br/>cách làm đẹp nào</h4>
				<div className={classes.quiz_button}>A. Giảm 1-2kg siết 2-3cm</div>
				<div className={classes.quiz_button}>B. Giảm 2-3kg siết  5-7 cm</div>
				<div className={classes.quiz_button}>C. Giảm 3-5kg  siết 5-10cm</div>
				<div className={classes.quiz_button}>D. Tăng sức đề kháng - đẹp da </div>
				
				</div>


				<div className={classes.bottom}>
					Đăng Ký Tư Vấn <br/>Miễn Phí Tại Đây
				</div>
			</div>
		</div>
	);
};

export default Quiz;
