import Link from 'next/link'


export default function Header12({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
	return (
		<>

			<header className="header-style-11">
				<nav className={`navbar navbar-expand-lg navbar-light w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
					<div className="container-fluid">
						<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo3.svg" alt="" /></Link>
						<ul className="navbar-nav gap-1 align-items-lg-center m-auto">
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
								<div className="mega-menu">
									<div className="row">
										<div className="col-6">
											<ul className="dropdown-menu">
												<li><Link className="dropdown-item" href="/">Home page 01</Link></li>
												<li><Link className="dropdown-item" href="/index-2">Home page 02</Link></li>
												<li><Link className="dropdown-item" href="/index-3">Home page 03</Link></li>
												<li><Link className="dropdown-item" href="/index-4">Home page 04</Link></li>
												<li><Link className="dropdown-item" href="/index-5">Home page 05</Link></li>
												<li><Link className="dropdown-item" href="/index-6">Home page 06</Link></li>
												<li><Link className="dropdown-item" href="/index-7">Home page 07</Link></li>
												<li><Link className="dropdown-item" href="/index-8">Home page 08</Link></li>
											</ul>
										</div>
										<div className="col-6">
											<ul className="dropdown-menu">
												<li><Link className="dropdown-item" href="/index-9">Home page 09</Link></li>
												<li><Link className="dropdown-item" href="/index-10">Home page 10</Link></li>
												<li><Link className="dropdown-item" href="/index-11">Home page 11</Link></li>
												<li><Link className="dropdown-item" href="/index-12">Home page 12</Link></li>
												<li><Link className="dropdown-item" href="/index-13">Home page 13</Link></li>
												<li><Link className="dropdown-item" href="/index-14">Home page 14</Link></li>
												<li><Link className="dropdown-item" href="/index-15">Home page 15</Link></li>
												<li><Link className="dropdown-item" href="/index-16">Home page 16</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
									<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
									<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
									<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
									<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/services-4">Services 04</Link></li>
									<li><Link className="dropdown-item" href="/service-detail">Services Details 01</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-2">Services Details 02</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-3">Services Details 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-4">Services Details 04</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/project">Project List</Link></li>
									<li><Link className="dropdown-item" href="/project-detail">Project Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
									<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
									<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
									<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
									<li><Link className="dropdown-item" href="/team">Team</Link></li>
									<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
									<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
									<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
								</ul>
							</li>
						</ul>
						<div className="d-flex align-items-center">
							<a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu d-lg-none d-inline-block">
								<svg width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line y1={12} x2={30} y2={12} stroke="currentColor" strokeWidth={3} />
									<path d="M5 22H30" stroke="currentColor" strokeWidth={3} />
									<path d="M10 2H30" stroke="currentColor" strokeWidth={3} />
								</svg>
							</a>
							<Link href="#" className="btn btn-primary-500-rounded d-none d-lg-inline-block">
								Learn More
							</Link>
							<div className="header-need-help">
								<div className="icon-phone">
									<svg width={17} height={18} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z" fill="#0055FF" />
									</svg>
								</div>
								<div className="info-help">
									<h3 className="paragraph-rubik-r">Need help?</h3>
									<h4 className="sub-heading-ag-sm">(808) 555-0111</h4>
								</div>
							</div>
						</div>
					</div>
				</nav>
				{/* offCanvas-menu */}
				<div className="offCanvas__info">
					<div className="offCanvas__close-icon menu-close">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
								<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
							</svg>
						</button>
					</div>
					<div className="offCanvas__logo mb-20">
						<Link href="/"><img src="/assets/imgs/template/logo3.svg" alt="Logo" /></Link>
					</div>
					<div className="offCanvas__side-info mb-30">
						<ul className="navbar-nav navbar-nav-mobile">
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/">Home page 1</Link></li>
									<li><Link className="dropdown-item" href="/index-2">Home page 2</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 3</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 4</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 5</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 6</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 7</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 8</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 9</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 10</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 11</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 12</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 13</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 14</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 15</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 16</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
									<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
									<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
									<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
									<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/services-4">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail">Service Details 01</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-2">Service Details 02</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-3">Service Details 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-4">Service Details 04</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Project List</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Project Detail</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
									<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
									<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
									<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
									<li><Link className="dropdown-item" href="/team">Team</Link></li>
									<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
									<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
									<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="side-gallery mb-4">
						<div className="pt-1" />
						<h4 className="mt-3 mb-3">Gallery</h4>
						<div className="grid-items">
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-1.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-2.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-3.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-4.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-5.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-6.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-7.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-8.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-9.png" alt="vatech" />
							</div>
						</div>
					</div>
					<div className="box-contactus mb-30">
						<h5 className="title-contactus neutral-1000 mb-3">Contact Us</h5>
						<div className="contact-info">
							<p className="address-2 text-md-medium neutral-1000"><strong>Address: </strong>1285 Crescent Wellington Heights, Louisville, KY 40204</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Hours: </strong> 8:00 - 17:00, Mon - Sat</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Phone: </strong> 01 256 986 3</p>
						</div>
					</div>
				</div>
				<div className="offCanvas__overly" />
			</header>

		</>
	)
}
