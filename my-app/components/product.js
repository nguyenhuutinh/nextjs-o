import React, { Component, useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from '../styles/Home.module.scss'
const Product = ({data}) => {
    
	useEffect(() => {}, []);

	
	return (
		<div className={classes.product_card}>
			<div className={classes.product_image_view}>
			<LazyLoadImage effect="blur" className={classes.product_image} src={data.image} />
			 <div className={classes.badge}>
				<div>{data.chai} </div>
				<span>chai</span>
			</div>
			</div>
           
			<div className={classes.title}>
                <h5 className={classes.title1}>{data.title} </h5>
                <h3 className={classes.title2}>{data.title2} </h3>
               
                <div className={classes.button_tu_van} onClick={()=>{data.onShowPopup(data.pos)}}>Tư vấn miễn phí</div>
            </div>
			<div className={classes.price}>Giá:&nbsp;&nbsp;{data.gia}</div>
			<div className={classes.ship}>Ship:&nbsp;{data.ship}&nbsp;<span>{data.ship_pre}</span></div>
			
           
		</div>
	);
};

export default Product;