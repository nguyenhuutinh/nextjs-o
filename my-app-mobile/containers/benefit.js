import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Benefit = () => {
	
	return (
		<div className={classes.benefit}>
			<div className={classes.title}>
					<h2>Những ai cần sử dụng <br/>Green O - sinh tố rau sạch?</h2>
					
			</div>
			<div className={classes.body}>
			<ul className={classes.line}>
				<li><b>Nhân viên văn phòng:</b> ngồi nhiều, ít vận động khiến mỡ thừa dồn tích tụ lại ở vùng bụng, cần giảm cân, giảm mỡ.</li>
				<li><b>Người muốn giảm cân nhưng không có nhiều thời gian để luyện tập thể dục – thể thao:</b> Phương pháp giảm cân bằng sinh tố/nước ép rau sạch của Green O hoàn toàn có thể thay thế phương pháp luyện tập để giảm cân, không những thế trong quá trình giảm cân còn giúp cải thiện làn da và sức khoẻ.</li>
				<li><b>Người bị gan nhiễm mỡ, máu nhiễm mỡ và nhiễm mỡ nội tạng:</b> Green O không chỉ giúp giảm cân mà còn giúp giảm mỡ ở các cơ quan nội tạng từ đó cải thiện sức khoẻ tổng thể.</li>
				<li><b>Người muốn trẻ hoá làn da: </b> Mỗi ngày 1 - 2 chai sinh tố/nước ép làm từ rau củ quả nguyên chất chính là bí quyết làm đẹp và trẻ hoá làn da từ trong ra ngoài của rất nhiều phụ nữ đặc biệt là những người nổi tiếng mà không một loại mỹ phẩm, phương pháp làm đẹp da nào có thể thay thế.</li>
				<li><b>Người bệnh về tiêu hoá: </b>Chất xơ trong rau củ quả tươi sạch là thành phần có lợi cho việc nhuận tràng, tiêu hoá và thanh lọc cơ thể.</li>
				<li><b>Người bệnh huyết áp, tim mạch, tiểu đường:</b> Thức uống Green O chứa nhiều chất xơ, vitamin và khoáng chất thiết yếu, là thức uống thích hợp nhất cho những người bệnh mãn tính để duy trì một chế độ ăn uống lành mạnh và tốt cho sức khoẻ nhất.</li>

			</ul>
			</div>
			
		</div>
	);
};

export default Benefit;
