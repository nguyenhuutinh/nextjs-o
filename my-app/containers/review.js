import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import Carousel from 'nuka-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Rate } from 'antd';
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'
const feedback = [
	
	{
		img: '../images/kh0.jpg',
		name: 'Nhạc sỹ Nguyễn Văn Chung',
		yold: '39 Tuổi',
		desc:
			'Sau liệu trình mỡ 2 bên hông vốn là điều mà Chung không ưa từ trước giờ lại giảm đi rõ rệt. Điều này khiến Chung khá vui. Hệ thống bài tiết hoạt động hiệu quả, điều khiến Chung bất ngờ là vào 1 ngày đẹp trời bất chợt sờ tay lên mặt và nhận ra sao da mặt mình bỗng đẹp và mịn hơn trước!'
	},
	{
		img: '../images/kh7.jpg',
		name: 'Ca Sĩ Trần Quốc Thiên',
		yold: '33 Tuổi',
		desc:
			'Mình dùng Green O đã 2 tháng, ban đầu chỉ nghĩ uống 2 liệu trình(2 tuần) là ngưng. Nhưng không ngờ hiệu quả tức thì, rõ rệt nên quyết định uống lâu dài. Cảm nhận rõ nhất về làn da, da mặt và da body căng bóng trộm vía trông khoẻ khoắn hơn cực. Bây giờ chấp cả make up liên tục liên da dẻ vẫn đẹp. Cái nữa là rất nhuận tràng, cơ thể nhẹ nhàng hơn trước nhiều.'
	},
	{
		img: '../images/kh1.jpg',
		name: 'Chị My',
		yold: '25 Tuổi',
		desc:
			'Em giảm được 11kg và 8cm mỡ thừa sau 4 liệu trình. 1 pha bức phá trước cưới, cơ thể nhẹ nhàng và làn da căng mơn mởn hơn. Thanks Green O '
	},
	{
		img: '../images/kh2.jpg',
		name: 'Chị Thảo',
		yold: '24 tuổi',
		desc: 'Sau khi dùng 3 liệu trình 14 ngày, chị xuống hẳn 12kg và 10cm mỡ thừa.'
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
		desc: 'Sau khi dùng liệu trình 14 ngày, mình giảm được 4 kg và 3cm mỡ thừa luôn. Da cũng bớt mụn và thâm hẳn'
	},
	{
		img: '../images/kh5.jpg',
		name: 'Chị Hạnh',
		yold: '26 tuổi',
		desc: 'Mỗi lần uống liệu trình Detox là chị thích nhất chai Vẻ đẹp tỏa sáng này. Ngon, thơm lại tốt cho da nữa.'
	},
	{
		img: '../images/kh6.jpg',
		name: 'Chị Tiên',
		yold: '29 tuổi',
		desc:
			'Chị thích nhất chai sữa hạt Protein Tốt Lắm trong liệu trình. Uống ngon, thơm bùi, lại tốt cho sức khỏe. Mình thấy da dẻ được cải thiện, tiêu hóa đều đặn hơn rất nhiều.'
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
			<Rate
																	defaultValue={5}
																	disabled
																	className={classes.rating}
																/>
			<div className={classes.review_main}>
				<Carousel
					ref={carousel}
					slidesToShow={3}
					className={classes.carousel}
					cellSpacing={20}
					framePadding={"70px"}
					autoplay={false}
					autoplayInterval={10000}
					pauseOnHover={true}
					lazyLoad="progressive"
					renderBottomCenterControls={null}
					// heightMode="max"
					initialSlideHeight={500}
					renderCenterLeftControls={({ previousSlide }) => (
					  <div className={classes.buttonWrapper} ><DoubleLeftOutlined onClick={previousSlide} className={classes.buttonControl}/></div>
					)}
					renderCenterRightControls={({ nextSlide }) => (
					  <div  className={classes.buttonWrapper}  ><DoubleRightOutlined onClick={nextSlide} className={classes.buttonControl}/></div>
					)}
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
