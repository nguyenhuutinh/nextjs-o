import React, { Component, useState, useEffect } from 'react';
import classes from '../styles/Home.module.scss'
import Link from 'next/link'

import { LazyLoadImage } from 'react-lazy-load-image-component';
const Header = () => {
	
	useEffect(() => {}, []);

	
	return (
		<div>
            <div className={classes.topbar}>
                
                <div>416A1 Hai Bà Trưng, Phường Tân Định, Quận 1, TP. Hồ Chí Minh</div>
                <div>Hotline: 1900 63 67 91 - 0909 09 60 60 - 0909 44 80 60</div>
            </div>
            <div className={classes.header}>
                <div className={classes.left}>
                    <Link href="/" style={{cursor:"pointers"}}><LazyLoadImage effect="blur"   className={classes.logo} src="../images/greeno-logo.png" /></Link>
                    <div className={classes.slogan}>
                    Thải Độc - Giảm Cân - Đẹp Da
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.link_item}><a href="https://www.greeno.vn/thuc-don-le"> Sản Phẩm</a></div>
                    <div className={classes.link_item}><a href="https://www.greeno.vn/thuc-don-giam-can"> Gói Định Kỳ</a></div>
                    <div className={classes.link_item}><a href="https://www.greeno.vn/thong-tin-dinh-duong">Thông tin dinh dưỡng</a></div>
                    <div className={classes.link_item}><a href="https://www.greeno.vn/cau-hoi-thuong-gap">Câu Hỏi Thường Gặp</a></div>
                </div>
		    </div>
        </div>
	);
};

export default Header;