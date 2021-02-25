import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Quiz = ({showForm,setPos }) => {
	const [option, setOption] = useState(-1)
	return (
		<div className={classes.quiz}>
			<div className={classes.right}>
				<div>
				<LazyLoadImage src="../images/greeno-logo.png" className={classes.quiz_logo} effect={"blur"}/>
				<h4>Bạn chọn <br/>cách làm đẹp nào</h4>
				<div className={`${classes.quiz_button +" "+ (option == 0 ? classes.quiz_active : "")}`} onClick={()=>{setOption(0),setPos(0)}}>A. Giảm 1-2kg siết 2-3cm</div>
				<div className={`${classes.quiz_button +" "+ (option == 1 ? classes.quiz_active : "")}`} onClick={()=>{setOption(1),setPos(1)}}>B. Giảm 2-3kg siết  5-7 cm</div>
				<div className={`${classes.quiz_button +" "+ (option == 2 ? classes.quiz_active : "")}`} onClick={()=>{setOption(2),setPos(2)}}>C. Giảm 3-5kg  siết 5-10cm</div>
				<div className={`${classes.quiz_button +" "+ (option == 3 ? classes.quiz_active : "")}`} onClick={()=>{setOption(3),setPos(3)}}>D. Tăng sức đề kháng - đẹp da </div>
				
				</div>


				<div className={classes.bottom}  onClick={()=>showForm(true)}>
					Đăng Ký Tư Vấn <br/>Miễn Phí Tại Đây
				</div>
			</div>
		</div>
	);
};

export default Quiz;
