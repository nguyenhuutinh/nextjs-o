import React, { Component, useState, useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button, Form, Input, Select } from 'antd';
import { useRouter } from 'next/router';
const FormItem = Form.Item;
const Quiz = ({ showForm, setPos, pos }) => {
	const [form] = Form.useForm();
	const questionRef = useRef();
	const [ option, setOption ] = useState(-1);
	const [ step, setStep ] = useState(1);
	const router = useRouter();
	const [ submiting, setSubmitting ] = useState(false);
	console.log("pos", pos)
	useEffect(() => {
		form.setFieldsValue({"question":pos == 3
			? 'Tăng sức đề kháng - đẹp da'
			: pos == 2
				? 'Giảm 3-5kg, siết 5-10cm'
				: pos == 1 ? 'Giảm 2-3kg, siết 5-7cm' : 'Giảm 1-2kg, siết 2-3cm'})
		return () => {
			
		}
	}, [pos])
	const sendData = (question, name, phone) => {
		var xhr = new XMLHttpRequest();
		var params = `your-name=${name}&tel-353=${phone}&your-message=${question}`;

		// get a callback when the server responds
		xhr.onreadystatechange = function() {
			//Call a function when the state changes.
			if (xhr.readyState == 4 && xhr.status == 200) {
				router.push(`/thank-you?phone=${phone}&name=${name}&question=${question}`);
			}
			console.log(xhr.readyState, xhr.status);
			if (xhr.status != 0) {
				setSubmitting(false);
			}
		};
		xhr.open('POST', 'https://www.greeno.vn/blogs/wp-json/contact-form-7/v1/contact-forms/3080/feedback', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		// open the request with the verb and the url

		// send the request
		xhr.send(params);
	};
	const handleSubmit = (values) => {
		// e.preventDefault();
		let { question, hovaten, sdt } = values;
		console.log(values);

		setSubmitting(true);
		sendData(question, hovaten, sdt);
	};

	const formItemLayout = {
		labelCol: {
			xs: { span: 18 },
			sm: { span: 18 }
		},
		wrapperCol: {
			xs: { span: 18 },
			sm: { span: 18 },
			md: { span: 18 }
		}
	};

	return (
		<div className={classes.quiz}>
			<div className={`${classes.right + ' ' + (step == 2 ? classes.flip : ' ')}`}>
				<div className={classes.step1}>
					<div>
						<LazyLoadImage src="../images/greeno-logo.png" className={classes.quiz_logo} effect={'blur'} />
						<h4>
							Bạn chọn <br />cách làm đẹp nào
						</h4>
						<div
							className={`${classes.quiz_button + ' ' + (option == 0 ? classes.quiz_active : '')}`}
							onClick={() => {
								setOption(0), setPos(0);setStep(2)
							}}
						>
							A. Giảm 1-2kg siết 2-3cm
						</div>
						<div
							className={`${classes.quiz_button + ' ' + (option == 1 ? classes.quiz_active : '')}`}
							onClick={() => {
								setOption(1), setPos(1);setStep(2)
							}}
						>
							B. Giảm 2-3kg siết 5-7 cm
						</div>
						<div
							className={`${classes.quiz_button + ' ' + (option == 2 ? classes.quiz_active : '')}`}
							onClick={() => {
								setOption(2), setPos(2);setStep(2)
							}}
						>
							C. Giảm 3-5kg siết 5-10cm
						</div>
						<div
							className={`${classes.quiz_button + ' ' + (option == 3 ? classes.quiz_active : '')}`}
							onClick={() => {
								setOption(3), setPos(3);setStep(2)
							}}
						>
							D. Tăng sức đề kháng - đẹp da{' '}
						</div>
					</div>

					<div className={classes.bottom} onClick={() => setStep(2)}>
						Đăng Ký Tư Vấn Miễn Phí <br /> Tại Đây
					</div>
				</div>
				<div className={classes.step2}>
					<div>
						<LazyLoadImage src="../images/greeno-logo.png" className={classes.quiz_logo} effect={'blur'} />
						<h4>
							Đăng ký Ngay Hôm Nay<br />Để Nhận Tư Vấn Miễn Phí<br />Về Liệu Trình Giảm Cân<br />Cùng
							GreenO
						</h4>
						<Form
							className={classes.form}
							requiredMark={true}
							form={form}
							onFinish={handleSubmit}
							style={{ marginTop: 8, margin: '0' }}
							initialValues={{
								question:
									pos == 3
										? 'Tăng sức đề kháng - đẹp da'
										: pos == 2
											? 'Giảm 3-5kg, siết 5-10cm'
											: pos == 1 ? 'Giảm 2-3kg, siết 5-7cm' : 'Giảm 1-2kg, siết 2-3cm'
							}}
						>
							<FormItem
								name="hovaten"
								{...formItemLayout}
								rules={[ { required: true, message: 'Thông tin còn thiếu' } ]}
							>
								<Input size="large" placeholder="Họ Và Tên" />
							</FormItem>

							<FormItem
								name="sdt"
								{...formItemLayout}
								rules={[ { required: true, message: 'Thông tin còn thiếu' } ]}
							>
								<Input size="large" style={{ marginTop: 10 }} placeholder="Số Điện Thoại" />
							</FormItem>
							<FormItem name="question" className={classes.register_question} {...formItemLayout}>
								<Select ref={questionRef} size="large" style={{ textAlign: 'left' }}>
									<Select.Option value="Giảm 1-2kg, siết 2-3cm">Giảm 1-2kg, siết 2-3cm</Select.Option>
									<Select.Option value="Giảm 2-3kg, siết 5-7cm">Giảm 2-3kg, siết 5-7cm</Select.Option>
									<Select.Option style={{ width: '100%' }} value="Giảm 3-5kg, siết 5-10cm">
										Giảm 3-5kg, siết 5-10cm
									</Select.Option>
									<Select.Option style={{ width: '100%' }} value="Tăng sức đề kháng - đẹp da">
										Tăng sức đề kháng - đẹp da
									</Select.Option>
								</Select>
							</FormItem>
							<Button htmlType="submit" size="large" loading={submiting} className={classes.dangky_button}>
								Đăng Ký
							</Button>
						</Form>
					</div>

					
				</div>
			</div>
		</div>
	);
};

export default Quiz;
