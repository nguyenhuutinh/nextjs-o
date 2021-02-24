import React, { Component, useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from '../styles/Home.module.scss'
const Product = ({data}) => {
    
	useEffect(() => {}, []);

	
	return (
		<div className={classes.product_card}>
            <LazyLoadImage effect="blur" className={classes.product_image} src={data.image} />
			<div className={classes.title}>
                <h5 className={classes.title1}>{data.title} </h5>
                <h3 className={classes.title2}>{data.title2} </h3>
               
                <div className={classes.button_tu_van}>Tư vấn miễn phí</div>
            </div>
            
		</div>
	);
};

export default Product;