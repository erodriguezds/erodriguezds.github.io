import * as React from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import './resume.scss'
import resume from '../resume';
import ExperienceTimeline from './resume/ExperienceTimeline';

import { Container, Row, Col } from "react-bootstrap";
import Job from './resume/Job';
import SkillBox from './resume/SkillBox';


export default function Resume(props) {
  return (
    <div className='resume letter-sheet container'>
	    <div className="personal-info">
		    <div className="picture" style={{backgroundImage : `url(${props.profilePicture || "/images/edu-wework.jpg"})`}}>
			</div>
		
            <div className="name-and-title">
                <div className="name">Eduardo</div>
                <div className="lastname">Rodríguez Da Silva</div>
                <div className="specialty">Software Engineer / Full Stack Web Developer</div>
            </div>
		
            <ul className="contact-section">
                <li><div className="contact-icon location"></div>Buenos Aires (CABA), Argentina</li>
                <li><div className="contact-icon mail"></div>eduardo.rodriguez.dasilva@gmail.com</li>
                <li><div className="contact-icon linkedin"></div>erodriguezds</li>
                <li><div className="contact-icon github"></div>erodriguezds</li>
            </ul>
        
        </div>
		<div className='about'>
			<div className="section-title">About Me</div>
			<p>{props.about}</p>
		</div>
		<Row>
        <Col md="7">
            <ExperienceTimeline jobs={resume.jobs} />
		</Col>
		<Col md="5">
			<div className="section-title">Skills</div>
			<SkillBox skillGroups={resume.skillGroups} />
			<div className="section-title">Education</div>
			<ul className="education-degrees">
				<li className="degree">
					<SchoolRoundedIcon />
					<span className="degree-title">&quot;Especialista en Telemática&quot;</span>
					<span className="degree-school">&quot;IT Specialist&quot;</span>
					<span className="degree-school">at Universidad Simón Bolívar</span>
					<span className="degree-duration">2008-2010</span>
				</li>
				<li className="degree last-child">
					<div className="degree-icon"></div>
					<span className="degree-title">&quot;Ingeniero Electrónico&quot;</span>
					<span className="degree-school">&quot;Electronics Engineer&quot;</span>
					<span className="degree-school">at Universidad Simón Bolívar</span>
					<span className="degree-duration">2000 - 2006</span>
				</li>
			</ul>
		</Col>

		</Row>
	</div>
  );
}