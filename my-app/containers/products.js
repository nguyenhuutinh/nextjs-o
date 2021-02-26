import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Product from '../components/product';

const Products = ({ onShowForm }) => {
	return (
		<div className={classes.products}>
			<div  className={classes.main_title}>
				<div className={classes.products_title}>Các Gói Giảm Cân An Toàn</div>
			</div>
			<div className={classes.products_main}>
				<Product
					data={{
						pos: 0,
						image: '../images/product_1.jpg',
						title: 'giảm 1-2kg, siết 2-3cm vùng bụng với',
						title2: '7 Ngày - 3 Chai / 1 Ngày',
						chai: 21,
						gia: '1,785,000 ₫',
						ship: '0 ₫',
						ship_pre: '105,000 ₫',
						onShowPopup: (pos) => {
							onShowForm(pos);
						}
					}}
				/>
				<Product
					data={{
						pos: 1,
						image: '../images/product_2.jpg',
						title: 'giảm 2-3kg, siết 5-7cm vùng bụng với',
						title2: '7 Ngày - 4 Chai / 1 Ngày',
						chai: 28,
						gia: '2,380,000 ₫',
						ship: '0 ₫',
						ship_pre: '105,000 ₫',
						onShowPopup: (pos) => {
							onShowForm(pos);
						}
					}}
				/>

				<Product
					data={{
						pos: 2,
						image: '../images/product_3.jpg',
						title: 'giảm 3-5kg, siết 5-10cm vùng bụng với',
						title2: '14 Ngày - 4 Chai / 1 Ngày',
						chai: 56,
						gia: '4,460,000 ₫',
						ship: '0 ₫',
						ship_pre: '210,000 ₫',
						onShowPopup: (pos) => {
							onShowForm(pos);
						}
					}}
				/>
				<Product
					data={{
						pos: 3,
						image: '../images/product_4.jpg',
						title: 'tăng sức đề kháng - tươi sáng làn da với',
						title2: '14 Ngày - 2 Chai / 1 Ngày',
						chai: 28,
						gia: '2,380,000 ₫',
						ship: '210,000 ₫',

						onShowPopup: (pos) => {
							onShowForm(pos);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Products;
