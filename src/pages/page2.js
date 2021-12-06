import React,{useState} from 'react';
import { Container,Row,Col,Offcanvas,Dropdown } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.svg'
import Ghost from '../images/ghost.svg'
import Egg from '../images/egg.svg'
import QuestionMark from '../images/questionmark.svg'
import './home.css'
const Page2=(props)=> {
	const [show, setShow] = useState(false);

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
		<div className="connect-wallet-container">
		<div class="head-part">
									<h2>STEP 1 <span>- Connect your wallet</span></h2>
								</div>
								<div class="select-box1">
									<img src={Ghost} alt="" />
									<Dropdown>
								<Dropdown.Toggle variant="" className="nice-select" id="dropdown-basic">
								4wmX...jMtZ
								</Dropdown.Toggle>

								<Dropdown.Menu >
									<Dropdown.Item href="#/action-1">4wmX...jMtZ</Dropdown.Item>
									<Dropdown.Item href="#/action-2">4wmX...jMtZ</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
			
								</div>
							</div>
			<div>
				<Row className="justify-content-between page-2-row ">
					<Col xl={3} >
					<div class="head-part">
									<h2>STEP 2 <span>- Connect your wallet</span></h2>
								</div>
								<p className="darke mb-0">Egg</p>
								<div class="egg-box">
									<div class="single-egg">
										<img src={Egg} alt="" />
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
									<div class="single-egg">
										<img src={Egg} alt=""/>
									</div>
								</div>
								<p className="darke mt-1">Your Eggs</p>

					</Col>
					<Col xl={6}>
						<div className="evelove-container evelove-container-page-2">
					<p className="darke hatch mt-0 mb-0 text-center">Hatch</p>
							<div className="evelove-body evelove-body-2 ">
								<div className="question-plus page-2-question-plus ">
									<div >
									<div className="question-container">
										<img src={QuestionMark} alt="" />
										
									</div>
									<p className="question-text">
										Drake#?
										</p>
									</div>
									
								</div>
								
									<div class="content-step mb-3">
										<div class="head-part">
											<h2>STEP3 <span>- Evolve your Eggs</span></h2>
										</div>
									</div>
									<a href="#" class="button default-big-button">Hatch</a>

							</div>
						</div>
					</Col>
					<Col xl={1}>

					</Col>
				</Row>
			</div>
			</Container> 
		 </div>

  
        </>
    );
}

export default Page2;