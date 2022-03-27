import * as React from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import './resume.scss'
import resume from '../resume';
import ExperienceTimeline from './resume/ExperienceTimeline';

import { Container, Row, Col } from "react-bootstrap";
import Job from './resume/Job';


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
                <li><div className="contact-icon location"></div>Belgrano, Buenos Aires</li>
                <li><div className="contact-icon whatsapp"></div>11 2761 4834</li>
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
        <Col sm="8">

		
            
            
            
            <ExperienceTimeline jobs={resume.jobs} />
		</Col>
		<Col sm="4">
			<div className="section-title">Skills</div>
			<div id="skills-box">
				<div className="skills-group w33">
					<div className="title">Front-End</div>
					<ul>
						<li>Vue</li>
						<li>Webpack</li>
						<li>ES6 (Javascript)</li>
						<li>jQuery</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ul>
				</div>
				<div className="skills-group w33">
					<div className="title">Back-End</div>
					<ul>
						<li>PHP 5.6/7.x</li>
						<li>Go(lang)</li>
						<li>C# (.NET)</li>
						<li>Node(js)</li>
						<li>Java</li>
					</ul>
				</div>
				<div className="skills-group w33">
					<div className="title">Database</div>
					<ul>
						<li>MySql</li>
						<li>MongoDB</li>
						<li>Redis</li>
					</ul>
				</div>
				<div className="skills-group w50">
					<div className="title">Web-frameworks &amp; Tools</div>
					<ul>
						<li>Yii2 (PHP)</li>
						<li>Slim 3 (PHP)</li>
						<li>Lumen / Laravel (PHP)</li>
						<li>Eloquent ORM (PHP)</li>
						<li>Cake ORM (PHP)</li>
						<li>Express (Node)</li>
					</ul>
				</div>
				<div className="skills-group w50">
					<div className="title">Others</div>
					<ul>
						<li>Docker</li>
						<li>Git</li>
						<li>Bitbucket</li>
						<li>Jira</li>
					</ul>
				</div>
			</div>
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