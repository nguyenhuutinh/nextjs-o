import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import Carousel from 'nuka-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from '@material-ui/lab/Rating';
const feedback = [
	{
		img: '../images/kh1.jpg',
		name: 'Chị My',
		yold: '25 Tuổi',
		desc:
			'Em giảm được 11kg và 8cm vòng bụng sau 4 liệu trình. 1 pha bức phá trước cưới, cơ thể nhẹ nhàng và làn da căng mơn mỡn hơn. thanks Green O '
	},
	{
		img: '../images/kh2.jpg',
		name: 'Chị Thảo',
		yold: '24 tuổi',
		desc: 'Sau khi dùng 3 liệu trình 14 ngày, chị xuống hẳn 12kg và 10cm vòng bụng.'
	},
	{
		img: '../images/kh3.jpg',
		name: 'Chị Ngân',
		yold: '25 tuổi',
		desc:
			'Mỗi tháng chị đều dùng 1 liệu trình 7 ngày của Green O, chủ yếu để bổ sung chất xơ và thải độc, vì chị thấy mỗi lần uống da dẻ tươi khỏe hơn, người cũng nhẹ nhàng thoải mái hơn rất nhiều'
	},
	{
		img: '../images/kh4.jpg',
		name: 'Chị Trúc',
		yold: '28 tuổi',
		desc: 'Sau khi dùng liệu trình 14 ngày, mình giảm được 4 kg và 3cm vòng bụng luôn. Da cũng bớt mụn và thâm hẳn'
	},
	{
		img: '../images/kh5.jpg',
		name: 'Chị Hạnh',
		yold: '26 tuổi',
		desc: 'Mỗi lần uống liệu trinh Detox là chị thích nhất chai Vẻ đẹp tỏa sáng này, Ngon, thơm lại tốt cho da nữa.'
	},
	{
		img: '../images/kh6.jpg',
		name: 'Chị Tiên',
		yold: '29 tuổi',
		desc:
			'Chị thích nhất chai sữa hạt Protein tốt lắm trong chu trình. Uống ngon, thơm bùi, lại tốt cho sức khỏe.Mình thấy da dẻ được cải thiện, tiêu hóa đều đặn hơn rất nhiều.'
	}
	// {img: kh1, name:'Ms THANH HOA', desc: 'Hôm nay bạn đã uống Green O - Sinh tố rau sạch chưa? #Green_O #Sinh_tố_rau_sạch'},
];

const Review = () => {
	useEffect(() => {}, []);
	const carousel = useRef(null);

	const _handleLoadImage = () => {
		console.log('onload');
		carousel.current.setDimensions();
	};
	return (
		<div className={classes.review}>
			<div className={classes.title}>
				Khách Hàng Nói Gì Về Green O
				
			</div>
			<Rating
																	value={5}
																	readOnly
																	className={classes.rating}
																/>
			<div className={classes.review_main}>
				<Carousel
					ref={carousel}
					slidesToShow={3}
					className={classes.carousel}
					cellSpacing={20}
					framePadding={30}
					autoplay={true}
					autoplayInterval={3500}
					pauseOnHover={true}
					lazyLoad="progressive"
					// heightMode="max"
					initialSlideHeight={800}
					// renderCenterLeftControls={({ previousSlide }) => (
					//   <div className={styles.buttonControl}><button  onClick={previousSlide}><Icon type="left" /></button></div>
					// )}
					// renderCenterRightControls={({ nextSlide }) => (
					//   <div className={styles.buttonControl} ><button  onClick={nextSlide}><Icon type="right" /></button></div>
					// )}
				>
					{feedback.map((record, index) => {
						return (
							<div
								key={index}
								onLoad={() => {
									_handleLoadImage();
								}}
								className={classes.review_item}
							>
								<div className={classes.review_header}>
									<LazyLoadImage effect="blur" className={classes.avatar} src={record.img} />
									<div className={classes.review_info}>
										<h3>{record.name}</h3>
										<h5>{record.yold}</h5>
									</div>
								</div>
								<div className={classes.desc}>{record.desc}</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default Review;
