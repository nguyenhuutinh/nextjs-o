import React, { Component, useState, useEffect } from 'react';
import classes from '../styles/Home.module.scss'
const HighLight = ({data}) => {
    
	useEffect(() => {}, []);

	
	return (
		<div className={classes.highlight_card}>
			<div className={classes.title} style={{backgroundImage:`url(${data.image})`}}>
                <h3 className={classes.title1}>{data.title} </h3>
                <div className={classes.title2}>{data.title2} </div>
            </div>
            <div className={classes.description}>
                <div className={classes.desc_item}><span className={classes.dot}></span><span className={classes.desc_title}>{data.description1}</span></div>
                <div className={classes.desc_item}><span className={classes.dot}></span><span className={classes.desc_title}>{data.description2}</span></div>
                {data.description3 && <div className={classes.desc_item}><span className={classes.dot}></span><span className={classes.desc_title}>{data.description3}</span></div>}
                { data.description4 && <div className={classes.desc_item}><span className={classes.dot}></span><span className={classes.desc_title}>{data.description4}</span></div>}
            </div>
		</div>
	);
};

export default HighLight;