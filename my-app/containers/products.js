import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Product from '../components/product';

const Products = ({onShowForm}) => {
	
	return (
		<div className={classes.products}>
			<div className={classes.title}>Các Gói Giảm Cân An Toàn</div>
			<div className={classes.products_main}>
				<Product
					data={{
						pos:0,
						image: '../images/product_1.jpg',
						title: 'giảm 1-2kg, siết 2-3cm vòng bụng với',
						title2: 'Gói 7 Ngày 21 Chai',
                        onShowPopup:(pos)=>{onShowForm(pos)}
					}}
				/>
				<Product
					data={{
						pos:1,
						image: '../images/product_2.jpg',
						title: 'giảm 2-3kg, siết 5-7cm vòng bụng với',
						title2: 'Gói 7 Ngày 28 Chai',
						onShowPopup:(pos)=>{onShowForm(pos)}
					}}
				/>

				<Product
					data={{
						pos:2,
						image: '../images/product_3.jpg',
						title: 'giảm 3-5kg, siết 5-10cm vòng bụng với',
						title2: 'Gói 14 Ngày 56 Chai',
						onShowPopup:(pos)=>{onShowForm(pos)}
					}}
				/>

				

				
			</div>
		</div>
	);
};

export default Products;
