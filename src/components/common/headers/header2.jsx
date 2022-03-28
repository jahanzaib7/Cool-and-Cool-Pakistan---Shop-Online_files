import React from 'react'
import "./header2.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import registerForm from '../../pages/register';
import { Badge } from '@mui/material';
import { padding } from '@mui/material/node_modules/@mui/system';
import Topbar from './common/topbar';
import { BiGitCompare } from "react-icons/bi";

import { connect } from "react-redux";
const Header2 = ({ wishList, cart, compare }) => {




	const menu = document.querySelector(".menu");
	// const menuMain = menu.querySelector(".menu-main");
	// const goBack = menu.querySelector(".go-back");
	// const menuTrigger = document.querySelector(".mobile-menu-trigger");
	// const closeMenu = menu.querySelector(".mobile-menu-close");
	let subMenu;

	const Menu_Main = (e) => {
		//     if(!menu.classList.contains("active")){
		//         return; 
		//     }
		//   if(e.target.closest(".menu-item-has-children")){
		//        const hasChildren = e.target.closest(".menu-item-has-children");
		//      showSubMenu(hasChildren);
		//   }
	};
	const Go_Back = () => {
		hideSubMenu();
	}
	const Menu_Trigger = () => {
		toggleMenu();
	}
	const Close_Menu = () => {
		toggleMenu();
	}
	const Menu_Overlay = () => {
		toggleMenu();
	}
	function toggleMenu() {
		// menu.classList.toggle("active");
		// document.querySelector(".menu-overlay").classList.toggle("active");
	}

	function showSubMenu(hasChildren) {
		//    subMenu = hasChildren.querySelector(".sub-menu");
		//    subMenu.classList.add("active");
		//    subMenu.style.animation = "slideLeft 0.5s ease forwards";
		//    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
		//    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
		//    menu.querySelector(".mobile-menu-head").classList.add("active");
	}

	function hideSubMenu() {
		//    subMenu.style.animation = "slideRight 0.5s ease forwards";
		//    setTimeout(() =>{
		//       subMenu.classList.remove("active");	
		//    },300); 
		//    menu.querySelector(".current-menu-title").innerHTML="";
		//    menu.querySelector(".mobile-menu-head").classList.remove("active");
	}

	window.onresize = function () {
		// if(this.innerWidth >991){
		//     if(menu.classList.contains("active")){
		//         toggleMenu();
		//     }

		// }
	}




	console.log(compare);



	var sum = 0;

	for (var i = 0; i < cart.length; i++) {

		sum += parseInt(cart[i].qty);

	}




	return (
		<>
			<header class="header" style={{ position: "fixed" }}>
				<Topbar />
				<div class="container">
					<div class="row v-center">
						<div class="header-item item-left">
							<div class="logo">
							<Link to={`${process.env.PUBLIC_URL}/`}>
									<img src='../assets/images/logos/logos.png' alt='Wovista' style={{ width: "150px" }} />
								</Link>
							</div>
						</div>

						<div class="header-item item-center">
							<div class="menu-overlay" onClick={() => Menu_Overlay()}>
							</div>
							<nav class="menu">
								<div class="mobile-menu-head">
									<div class="go-back" onClick={() => Go_Back()}><i class="fa fa-angle-left"></i></div>
									<div class="current-menu-title"></div>
									<div class="mobile-menu-close" onClick={() => Close_Menu()}>&times;</div>
								</div>
								<ul class="menu-main" onClick={(e) => Menu_Main(e)}>
									<Link to={`${process.env.PUBLIC_URL}/`}>
										<li>
											<a style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}>HOME</a>
										</li>
									</Link>
									<li class="menu-item-has-children">
										<a href="#">NEW ARRIVALS <i class=""></i></a>
										<div class="sub-menu mega-menu mega-menu-column-4">
											<div class="list-item text-center">
												<Link to={`${process.env.PUBLIC_URL}/Category/Mens`}><a >
													<img src="./assets/images/Categories-Men.png" alt="New Product" />
													<h4 class="title">MENS</h4>
												</a></Link>
											</div>
											<div class="list-item text-center">
												<Link to={`${process.env.PUBLIC_URL}/Category/Womens`}><a >
													<img src="./assets/images/Categories-Women.png" alt="new Product" />
													<h4 class="title">WOMENS</h4>
												</a></Link>
											</div>
											<div class="list-item text-center">
												<Link to={`${process.env.PUBLIC_URL}/Category/Kids`}><a >
													<img src="./assets/images/Categories-Kids.png" alt="new Product" />
													<h4 class="title">KIDS</h4>
												</a></Link>
											</div>
											<div class="list-item text-center">
												<Link to={`${process.env.PUBLIC_URL}/Category/Misc`}><a >
													<img src="./assets/images/Categories-Accesorries.png" alt="new Product" />
													<h4 class="title">MISC</h4>
												</a></Link>
											</div>
										</div>
									</li>
									<li class="menu-item-has-children">
										<a href="#">SHOP <i class=""></i></a>
										<div class="sub-menu mega-menu mega-menu-column-4">
											<div class="list-item">
												<h4 class="title">Men's Fashion</h4>
												<ul>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
												</ul>
												<h4 class="title">Kid's Fashion</h4>
												<ul>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
												</ul>
											</div>
											<div class="list-item">
												<h4 class="title">Women's Fashion</h4>
												<ul>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
												</ul>
												<h4 class="title">Accessories</h4>
												<ul>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
												</ul>
											</div>
											<div class="list-item">
												<h4 class="title">Home, Kitchen</h4>
												<ul>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
													<li><a href="#">Product List</a></li>
												</ul>
											</div>
											<div class="list-item">
												<img src="./assets/images/Categories-Accesorries.png" alt="shop" />
											</div>
										</div>
									</li>
									{/* <li class="menu-item-has-children">
 							<a href="#">Blog <i class="fa fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Standard Layout</a></li>
 									<li><a href="#">Grid Layout</a></li>
 									<li><a href="#">single Post Layout</a></li>
 								</ul>
 							</div>
 						</li> */}
									{/* <li class="menu-item-has-children">
 							<a href="#">PAGES <i class=""></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<Link to={`${process.env.PUBLIC_URL}/login`}><li><a style={{color:"#000", fontWeight:500}}>Login</a></li></Link><br/>
 									<Link to={`${process.env.PUBLIC_URL}/register`}><li><a style={{color:"#000", fontWeight:500}}>Register</a></li></Link><br/>
 									<li><a style={{color:"#000", fontWeight:500}}>Reviews</a></li><br/>
 									
 								</ul>
 							</div>
 						</li> */}
									<li>
										<Link to={`${process.env.PUBLIC_URL}/contact`}>CONTACT</Link>
									</li>
								</ul>
							</nav>
						</div>

						<div class="header-item item-right" style={{ paddingRight: 20 }}>
							<a href="#"><FiSearch style={{ fontSize: 20, marginRight: 12 }} /></a>
							<Link to={`${process.env.PUBLIC_URL}/compare`}>

								<Badge badgeContent={compare.length} color="warning" style={{ fontSize: 20, marginRight: 15, color: "#fff" }} >
									<a href="#"><BiGitCompare style={{ fontSize: 20, marginRight: 2 }} /></a>
								</Badge>
							</Link>
							<Link to={`${process.env.PUBLIC_URL}/wishlist`}>

								<Badge badgeContent={wishList.length} color="warning" style={{ fontSize: 20, marginRight: 15, color: "#fff" }} >
									<a href="#"><FiHeart style={{ fontSize: 20, marginRight: 2 }} /></a>
								</Badge>
							</Link>
							<Link to={`${process.env.PUBLIC_URL}/cart`}>
								<Badge badgeContent={sum} color="warning" style={{ fontSize: 20, marginRight: 15, color: "#fff" }}>
									<a href="#"><FiShoppingCart style={{ fontSize: 20, marginRight: 2 }} /></a>
								</Badge>
							</Link>


							<a >

								{/* <FiUser style={{fontSize:24, marginLeft:5}} /> */}



								<span className='header1'>
									<span className='menu1'>

										<ul class="menu-main" onClick={(e) => Menu_Main(e)}>

											<li class="menu-item-has-children">
												<a href="#"><FiUser style={{ fontSize: 24, marginLeft: 5 }} /></a>
												<div class="sub-menu single-column-menu">
													<ul>
														<Link to={`${process.env.PUBLIC_URL}/login`}><li><a style={{ marginTop: 5, marginBottom: 15, color: "#000", fontWeight: 500 }}>Login</a></li></Link><br />
														<Link to={`${process.env.PUBLIC_URL}/register`}><li><a style={{ color: "#000", marginBottom: 10, fontWeight: 500 }}>Register</a></li></Link><br />
														<li><a style={{ color: "#000", fontWeight: 500, marginLeft: 20 }}>Reviews</a></li><br />

													</ul>



												</div>
											</li>
										</ul>


									</span>
								</span>

							</a>










							<div class="mobile-menu-trigger" onClick={() => Menu_Trigger()}>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</header>


		</>

	)
}
function mapStateToProps(state) {

	return {
		wishList: state.wishlist.list,
		cart: state.cartList.cart,
		compare: state.compare.items
	}
}
export default connect(mapStateToProps, null)(Header2);