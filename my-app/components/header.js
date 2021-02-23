import React, { Component, useState, useEffect } from 'react';
import classes from '../styles/Home.module.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
const Header = () => {
	
	useEffect(() => {}, []);

	
	return (
		<div className={classes.header}>
			<div className={classes.left}>
                <LazyLoadImage effect="blur"   className={classes.logo} src="../images/greeno-logo.png"/>
                <div className={classes.slogan}>
                Thải Độc - Giảm Cân - Đẹp Da
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.link_item}><a href="/thuc-don-le"> Sản Phẩm</a></div>
                <div className={classes.link_item}><a href="/thuc-don-giam-can"> Gói Định Kỳ</a></div>
                <div className={classes.link_item}><a href="/thong-tin-dinh-duong">Thông tin dinh dưỡng</a></div>
                <div className={classes.link_item}><a href="/cau-hoi-thuong-gap">Câu Hỏi Thường Gặp</a></div>
            </div>
		</div>
	);
};

export default Header;