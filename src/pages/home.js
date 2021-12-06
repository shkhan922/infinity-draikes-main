import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas, Dropdown } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.svg'
import Wallet from '../images/wallet.svg'
import Egg from '../images/egg.svg'
import QuestionMark from '../images/questionmark.svg'
import Plus from '../images/orange-plus.svg'
import Top from '../images/base/top.png'

import './home.css'
const Home = (props) => {
	const [show, setShow] = useState(false);
	const [visible, setVisible] = useState(false)
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
			   in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<>
			<div className="main-wrap">
				<Container>
					<div className="offcanvas-menu main-menu">
						<img src={Logo} />
						<ul onClick={handleShow} className="offcanvas-close"><HiMenu /></ul>
						<ul className="offmenu" id="menuParent">
							<li><a className="active" href="#">EVOLVE</a></li>
							<li><a href="#">HATCH</a></li>
							<li><a href="#">MY DRAKES</a></li>
							<li><a href="#">HOME</a></li>
						</ul>
					</div>

					<Offcanvas className="small-screen-nav" show={show} onHide={handleClose}>
						<Offcanvas.Header closeVariant="white" closeButton>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<ul className="small-nav-bar" id="menuParent">
								<li><a className="active" href="#">EVOLVE</a></li>
								<li><a href="#">HATCH</a></li>
								<li><a href="#">MY DRAKES</a></li>
								<li><a href="#">HOME</a></li>
							</ul>
						</Offcanvas.Body>
					</Offcanvas>
					<div>
						<img onClick={scrollToTop} className="top-btn" style={{ opacity: visible ? '1' : '0' }} src={Top} alt="" />

					</div>
					<div className="connect-wallet-container">
						<div class="head-part">
							<h2>STEP 1 <span>- Connect your wallet</span></h2>
						</div>
						<div class="select-box1">
							<img src={Wallet} alt="" />
							<Dropdown>
								<Dropdown.Toggle variant="" className="nice-select" id="dropdown-basic">
									Select a wallet...
								</Dropdown.Toggle>

								<Dropdown.Menu >
									<Dropdown.Item href="#/action-1">Select a wallet...</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Select a wallet...</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>

						</div>
					</div>
					<div>
						<Row className="justify-content-center ">
							<Col xl={3} >
								<div class="head-part">
									<h2>STEP 2 <span>- Connect your wallet</span></h2>
								</div>
								<p className="darke mb-0">DRAKE A</p>
								<div class="egg-box">
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
								</div>
								<p className="darke mt-1">Your Drakes</p>

							</Col>
							<Col xl={6}>
								<p className="darke evolve mt-0 mb-0 text-center">Evolve</p>
								<div className="evelove-container">
									<div className="evelove-body">
										<div className="question-plus">
											<div>
												<div className="question-container">
													<img src={QuestionMark} alt="" />

												</div>
												<p className="question-text">
													Drake#?
												</p>
											</div>
											<div className="plus-container">
												<img src={Plus} />


											</div>
											<div>
												<div className="question-container">
													<img src={QuestionMark} alt="" />
												</div>
												<p className="question-text">
													Drake#?
												</p>
											</div>

										</div>
										<div class="content-step mb-2 mt-2">
											<div class="head-part">
												<h2>STEP4 <span>- Select Elixir</span></h2>
											</div>
											<div class="select-box1 " style={{ width: "145px" }}>

												<Dropdown>
													<Dropdown.Toggle variant="" className="nice-select" id="dropdown-basic">
														Elixir#67
													</Dropdown.Toggle>

													<Dropdown.Menu className=" elixir-dropdown" >
														<Dropdown.Item href="#/action-1">Elixir#67</Dropdown.Item>
														<Dropdown.Item href="#/action-2">Elixir#67</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>

											</div>
										</div>
										<div class="content-step mb-3">
											<div class="head-part">
												<h2>STEP5 <span>- Evolve your Drakes</span></h2>
											</div>
										</div>
										<a href="#" class="button default-big-button">Evolve</a>

									</div>
								</div>
							</Col>
							<Col xl={3}>
								<div class="head-part drake-b">
									<h2 className="">STEP 3 <span>- Connect your Drake B</span></h2>
								</div>
								<p className="darke mb-0">DRAKE B</p>
								<div class="egg-box">
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
								</div>
								<p className="darke mt-1">Your Drakes</p>

							</Col>
						</Row>
					</div>


				</Container>
			</div>


		</>
	);
}

export default Home;