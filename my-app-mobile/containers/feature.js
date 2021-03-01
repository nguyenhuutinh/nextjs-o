import React, { Component, useState, useEffect, useRef } from 'react';
import classes from '../styles/Home.module.scss';
import HighLight from '../components/highlight';
import Carousel from 'nuka-carousel';

import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'

const Feature = () => {
	useEffect(() => {}, []);
	const carousel = useRef(null);
	const _handleLoadImage = () => {
		console.log('onload');
		carousel.current.setDimensions();
	};
	return (
		<div className={classes.feature}>
			<div className={classes.title}>Đặc Điểm Nổi Bật Của Green O</div>
			<div className={classes.highlight_main}>
			<Carousel
					ref={carousel}
					slidesToShow={1}
					className={classes.feature}
					cellSpacing={20}
					framePadding={"50px"}
					// autoplay={true}
					// autoplayInterval={3500}
					pauseOnHover={true}
					lazyLoad="progressive"
					renderBottomCenterControls={null}
					touch-action={null}
					animation={null}
					// heightMode="max"
					// initialSlideHeight={400}
					renderCenterLeftControls={({ previousSlide }) => (
					  <div className={classes.buttonWrapper} ><DoubleLeftOutlined onClick={previousSlide} className={classes.buttonControl}/></div>
					)}
					renderCenterRightControls={({ nextSlide }) => (
					  <div  className={classes.buttonWrapper}  ><DoubleRightOutlined onClick={nextSlide} className={classes.buttonControl}/></div>
					)}
				>
				<HighLight
					data={{
						image: '../images/highlight1.jpg',
						title: 'Rau sạch đạt chuẩn',
						title2: 'VietGAP',
                        description1: "100% nguyên liệu sạch đạt chuẩn VietGAP",
                        description2: "Lựa chọn sử dụng các loại rau, củ quả tốt nhất cho sức khoẻ như: Cần tây, bó xôi, táo, lê…",
                        
					}}
				/>
				<HighLight
					data={{
						image: '../images/highlight2.jpg',
						title: '100%',
						title2: 'Nguyên chất',
                        description1: "Không thêm đường",
                        description2: "Không thêm nước",
                        description3: "Không chất bảo quản",
                        description4: "Không thêm bất cứ hương liệu hay chất điều vị nhân tạo nào"
					}}
				/>

				<HighLight
					data={{
						image: '../images/highlight3.jpg',
						title: 'Giá trị',
						title2: 'Dinh Dưỡng Cao',
                        description1: "Cung cấp đầy đủ các vitamins, khoáng chất từ rau, củ, quả sạch, đạt chuẩn VietGap",
                        description2: "Hỗ trợ giảm cân tự nhiên an toàn, hiệu quả, thải độc triệt để",
                        description3: "Dùng thường xuyên để duy trì thói quen ăn uống lành mạnh ngăn ngừa các bệnh như: ung thư, tiểu đường, máu mỡ, cao huyết áp, tim mạch…",
                        
					}}
				/>

				<HighLight
					data={{
                        image: '../images/highlight4.jpg',
						title: 'Giao hàng',
						title2: 'Tận Nơi',
                        description1: "Thực phẩm tươi được chế biến mỗi ngày",
                        
                        description2: "Giao hàng tận nơi",
						description3: "Ưu đãi phí ship khi sử dụng gói định kỳ",
					}}
				/>

				</Carousel>
			</div>
		</div>
	);
};

export default Feature;
