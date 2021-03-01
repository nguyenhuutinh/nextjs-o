import { Button, Card, Form, Input, Radio, Result } from 'antd';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'

import styles from '../styles/Register.module.scss';

const FormItem = Form.Item;
const { TextArea } = Input;

const RegisterForm = ({onCancel, pos}) => {
	const [ sent, setSent ] = useState(false);
  
	const form = useRef();
  const questionRef = useRef()
  const router = useRouter()
  const [ submiting, setSubmitting ] = useState(false);

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
		
    setSubmitting(true)
		sendData(question, hovaten, sdt )
	};

	// const {
	//   form: { getFieldDecorator, getFieldValue },
	// } = props;

	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 24 }
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 24 },
			md: { span: 24 }
		}
	};

	return (
		<div className={styles.register_wrapper}>
			<div className={styles.register_header}>
				<img src={'../images/call.png'} />
				Hotline: 1900 63 67 91
			</div>
			<Card bordered={false} style={{ display: sent ? 'none' : '' }}>
				<Form requiredMark={false} ref={form} layout="vertical" onFinish={handleSubmit} style={{ marginTop: 8, margin: '0' }} initialValues={{question: pos==3 ? "Tăng sức đề kháng - đẹp da" : pos == 2 ? "Giảm 3-5kg, siết 5-10cm": pos == 1 ? "Giảm 2-3kg, siết 5-7cm":"Giảm 1-2kg, siết 2-3cm"}}>
					<FormItem
            name="question"
						className={styles.register_question}
						{...formItemLayout}
						label="1. Hãy cho Green O biết nhu cầu của bạn là gì?"
					>
						
							<Radio.Group ref={questionRef} >
								<Radio style={{ width: '100%' }} value="Giảm 1-2kg, siết 2-3cm">
								Giảm 1-2kg, siết 2-3cm
								</Radio>
								<Radio style={{ width: '100%' }} value="Giảm 2-3kg, siết 5-7cm">
								Giảm 2-3kg, siết 5-7cm
								</Radio>
								<Radio style={{ width: '100%' }} value="Giảm 3-5kg, siết 5-10cm">
								Giảm 3-5kg, siết 5-10cm
								</Radio>
								<Radio style={{ width: '100%' }} value="Tăng sức đề kháng - đẹp da">
									Tăng sức đề kháng - đẹp da
								</Radio>
							</Radio.Group>
						
					</FormItem>

					<FormItem
           name="hovaten"
						{...formItemLayout}
						label="2. Vui lòng điền tên và số điện thoại để được tư vấn"
            rules={[ { required: true, message: 'Thông tin còn thiếu' } ]}
					>
						<Input size="large" placeholder="Họ Và Tên" />
					</FormItem>

					<FormItem name="sdt" {...formItemLayout} rules={[ { required: true, message: 'Thông tin còn thiếu' } ]}>
						<Input size="large" style={{ marginTop: 10 }} placeholder="Số Điện Thoại" />
					</FormItem>
					<FormItem style={{ marginTop: 0, textAlign: 'center' }}><Button loading={submiting} size="large" type="primary" htmlType="submit">
						Gửi
					</Button>
					<Button
          onClick={onCancel}
						loading={submiting}
						size="large"
						type="default"
						style={{ marginLeft: 10 }}
					>
						Hủy
					</Button></FormItem>
				</Form>
			</Card>
		</div>
	);
};
export default RegisterForm;
