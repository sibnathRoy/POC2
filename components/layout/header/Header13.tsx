import Link from 'next/link'


export default function Header13({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
	return (
		<>

			<div>
				<section className="top-bar position-relative z-4 d-none d-lg-block top-bar-4 ">
					<div className="container-fluid">
						<div className="container py-2">
							<div className="d-flex mb-lg-0 mb-3 flex-wrap align-items-center justify-content-center justify-content-lg-between gap-4">
								<div className="box-infos-contact d-flex align-items-center">
									<div className="address">
										<svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 0C6.01169 0.00263755 4.10556 0.793661 2.69961 2.19961C1.29366 3.60556 0.502638 5.51169 0.5 7.5C0.5 12.8844 7.4875 19.6281 7.78437 19.9125C7.84212 19.9686 7.91947 20 8 20C8.08053 20 8.15788 19.9686 8.21562 19.9125C8.5125 19.6281 15.5 12.8844 15.5 7.5C15.4974 5.51169 14.7063 3.60556 13.3004 2.19961C11.8944 0.793661 9.98831 0.00263755 8 0ZM8 10.9375C7.32013 10.9375 6.65552 10.7359 6.09023 10.3582C5.52493 9.98046 5.08434 9.4436 4.82416 8.81547C4.56399 8.18735 4.49591 7.49619 4.62855 6.82938C4.76119 6.16257 5.08858 5.55006 5.56932 5.06932C6.05006 4.58858 6.66257 4.26119 7.32938 4.12855C7.99619 3.99591 8.68735 4.06399 9.31547 4.32416C9.9436 4.58434 10.4805 5.02493 10.8582 5.59023C11.2359 6.15552 11.4375 6.82013 11.4375 7.5C11.437 8.41151 11.0746 9.28554 10.4301 9.93008C9.78554 10.5746 8.91151 10.937 8 10.9375Z" fill="currentColor" />
										</svg>
										62, Business Str Hobert, AU
									</div>
									<div className="email">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.9582 10.832L11.2832 12.5127C10.6039 13.1944 9.40875 13.2091 8.7148 12.5127L7.03969 10.832L1.02344 16.8678C1.24738 16.9714 1.4943 17.0332 1.7568 17.0332H18.2412C18.5037 17.0332 18.7505 16.9714 18.9744 16.8679L12.9582 10.832Z" fill="currentColor" />
											<path d="M18.2411 2.96875H1.75672C1.49422 2.96875 1.2473 3.03055 1.02344 3.1341L7.45223 9.58422C7.45266 9.58465 7.45316 9.58473 7.45359 9.58516C7.45402 9.58559 7.4541 9.58617 7.4541 9.58617L9.54445 11.6834C9.76648 11.9055 10.2314 11.9055 10.4534 11.6834L12.5434 9.58652C12.5434 9.58652 12.5439 9.58559 12.5443 9.58516C12.5443 9.58516 12.5452 9.58465 12.5457 9.58422L18.9743 3.13406C18.7504 3.03047 18.5036 2.96875 18.2411 2.96875Z" fill="currentColor" />
											<path d="M0.186953 3.95312C0.0710937 4.18742 0 4.4475 0 4.72609V15.273C0 15.5516 0.0710156 15.8116 0.186914 16.0459L6.21359 9.99973L0.186953 3.95312Z" fill="currentColor" />
											<path d="M19.8118 3.95312L13.7852 9.99981L19.8118 16.0461C19.9276 15.8118 19.9987 15.5517 19.9987 15.273V4.72617C19.9987 4.4475 19.9276 4.18742 19.8118 3.95312Z" fill="currentColor" />
										</svg>
										info@vatech.com
									</div>
									<div className="phone">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.2051 13.2321C14.5517 12.587 13.736 12.587 13.0867 13.2321C12.5915 13.7232 12.0962 14.2143 11.6093 14.7137C11.4761 14.8511 11.3638 14.8802 11.2014 14.7886C10.881 14.6138 10.5397 14.4723 10.2317 14.2809C8.79592 13.3778 7.59315 12.2166 6.52773 10.9098C5.99918 10.2606 5.52889 9.56556 5.20011 8.78314C5.13352 8.62499 5.14601 8.52095 5.27502 8.39193C5.77028 7.91332 6.25305 7.42223 6.73998 6.93114C7.41836 6.2486 7.41836 5.44953 6.73582 4.76283C6.34877 4.37162 5.96172 3.98874 5.57467 3.59753C5.17514 3.19799 4.77977 2.7943 4.37607 2.39892C3.72267 1.76217 2.90695 1.76217 2.25771 2.40309C1.75829 2.89418 1.27968 3.39776 0.771944 3.88053C0.301659 4.32584 0.0644358 4.87104 0.014494 5.5078C-0.0645804 6.54409 0.18929 7.52211 0.547206 8.47517C1.27968 10.4479 2.39505 12.2 3.74764 13.8064C5.57467 15.9789 7.75546 17.6977 10.3067 18.938C11.4553 19.4956 12.6456 19.9243 13.9399 19.9951C14.8305 20.045 15.6046 19.8203 16.2247 19.1252C16.6493 18.6508 17.1279 18.218 17.5773 17.7643C18.2432 17.0901 18.2474 16.2744 17.5857 15.6085C16.7949 14.8136 16 14.0229 15.2051 13.2321Z" fill="currentColor" />
											<path d="M14.4098 9.91419L15.9455 9.652C15.7042 8.24114 15.0383 6.96346 14.027 5.94798C12.9574 4.8784 11.6048 4.20418 10.1149 3.99609L9.89844 5.54013C11.0513 5.70244 12.1 6.22266 12.9282 7.05086C13.7107 7.83328 14.2226 8.82379 14.4098 9.91419Z" fill="currentColor" />
											<path d="M16.8104 3.23789C15.0375 1.46496 12.7943 0.34543 10.318 0L10.1016 1.54403C12.2407 1.84368 14.1801 2.81338 15.7117 4.34077C17.1642 5.79324 18.1172 7.6286 18.4626 9.64708L19.9983 9.38488C19.5947 7.04595 18.4918 4.92342 16.8104 3.23789Z" fill="currentColor" />
										</svg>
										+98 90980798
									</div>
								</div>
								<div className="box-socials">
									<Link href="/https://www.facebook.com/" className=" text-reset">
										<svg width={15} height={30} viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.42808 30H9.70217V16.3125H14.1122L14.7783 10.9875H9.70217V7.575C9.70217 6.0375 10.1162 4.9875 12.2402 4.9875H14.9583V0.20625C14.4903 0.15 12.8882 0 11.0162 0C7.09212 0 4.42808 2.49375 4.42808 7.05V10.9875H0V16.3125H4.42808V30Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="/https://www.instagram.com/" className=" text-reset">
										<svg width={31} height={30} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.4386 22.6965C11.1914 22.6965 7.76373 19.2591 7.76373 15C7.76373 10.7409 11.1914 7.30355 15.4386 7.30355C19.6858 7.30355 23.1135 10.7409 23.1135 15C23.1135 19.2591 19.6858 22.6965 15.4386 22.6965ZM15.4386 9.99787C12.692 9.99787 10.4505 12.2456 10.4505 15C10.4505 17.7544 12.692 20.0021 15.4386 20.0021C18.1853 20.0021 20.4267 17.7544 20.4267 15C20.4267 12.2456 18.1853 9.99787 15.4386 9.99787ZM23.4278 24.8054C22.4362 24.8054 21.6354 24.0023 21.6354 23.0079C21.6354 22.0135 22.4362 21.2104 23.4278 21.2104C24.4195 21.2104 25.2203 22.0097 25.2203 23.0079C25.2206 23.244 25.1744 23.4779 25.0844 23.6961C24.9945 23.9143 24.8624 24.1126 24.6959 24.2796C24.5294 24.4465 24.3317 24.5789 24.1141 24.6692C23.8965 24.7594 23.6633 24.8057 23.4278 24.8054ZM30.3992 15C30.3992 17.0714 30.4179 19.124 30.3019 21.1917C30.1859 23.5933 29.6396 25.7248 27.8883 27.4809C26.1333 29.2409 24.0116 29.785 21.6167 29.9013C19.5511 30.0177 17.5042 29.9989 15.4424 29.9989C13.3768 29.9989 11.3299 30.0177 9.26802 29.9013C6.87312 29.785 4.74765 29.2371 2.99639 27.4809C1.24138 25.721 0.698783 23.5933 0.582781 21.1917C0.466778 19.1203 0.485488 17.0676 0.485488 15C0.485488 12.9324 0.466778 10.876 0.582781 8.80832C0.698783 6.40669 1.24512 4.27526 2.99639 2.51907C4.7514 0.75913 6.87312 0.215012 9.26802 0.0986833C11.3336 -0.0176453 13.3805 0.00111596 15.4424 0.00111596C17.508 0.00111596 19.5548 -0.0176453 21.6167 0.0986833C24.0116 0.215012 26.1371 0.762882 27.8883 2.51907C29.6433 4.27901 30.1859 6.40669 30.3019 8.80832C30.4217 10.876 30.3992 12.9286 30.3992 15ZM27.1063 6.15152C26.8331 5.46856 26.5038 4.95822 25.9762 4.43286C25.4485 3.90375 24.9434 3.57353 24.2623 3.2996C22.294 2.51532 17.6202 2.69168 15.4386 2.69168C13.257 2.69168 8.57949 2.51531 6.61118 3.29584C5.93013 3.56978 5.42122 3.9 4.89734 4.42911C4.36971 4.95822 4.04041 5.46481 3.76724 6.14777C2.9889 8.12535 3.16478 12.8123 3.16478 15C3.16478 17.1877 2.9889 21.8784 3.76724 23.8522C4.04041 24.5352 4.36971 25.0455 4.89734 25.5709C5.42496 26.0962 5.93013 26.4302 6.61118 26.7042C8.57949 27.4847 13.257 27.3083 15.4386 27.3083C17.6202 27.3083 22.2978 27.4847 24.2661 26.7042C24.9471 26.4302 25.456 26.1 25.9799 25.5709C26.5075 25.0418 26.8368 24.5352 27.11 23.8522C27.8883 21.8784 27.7125 17.1877 27.7125 15C27.7125 12.8123 27.8883 8.12536 27.1063 6.15152Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="/https://twitter.com/" className=" text-reset">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11.6468 8.46864L18.9321 0H17.2057L10.8799 7.3532L5.82741 0H0L7.6403 11.1193L0 20H1.72649L8.40678 12.2348L13.7425 20H19.57L11.6468 8.46864ZM9.28211 11.2173L8.50799 10.1101L2.34857 1.29967H5.00037L9.97109 8.40994L10.7452 9.51718L17.2066 18.7594H14.5548L9.28211 11.2173Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="/https://www.linkedin.com/" className=" text-reset">
										<svg width={25} height={30} viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.7333 0C4.63278 0 0.398438 5.25 0.398438 11.0625C0.398438 13.875 1.87125 16.6875 4.26457 18.1875C5.00098 18.5625 4.81688 18.1875 5.36918 15.9375C5.36918 15.75 5.36918 15.5625 5.18508 15.375C1.87125 11.25 4.63278 3.1875 12.365 3.1875C23.5953 3.1875 21.386 18.9375 14.3902 18.9375C12.9174 19.125 11.6286 18 11.6286 16.5V15.75C12.365 13.6875 12.9174 11.8125 13.1015 9.75C13.1015 5.8125 7.3943 6.375 7.3943 11.625C7.3943 12.5625 7.5784 13.5 7.94661 14.25C7.94661 14.25 6.10559 21.9375 5.73739 23.25C5.36918 25.5 5.55329 27.75 5.92149 29.8125C5.73739 30 5.92149 30 5.92149 30H6.10559C7.3943 28.125 8.49891 26.25 9.23532 24.1875C9.41942 23.25 10.3399 19.875 10.3399 19.875C11.2604 21.1875 12.9174 21.9375 14.5743 21.9375C20.2814 21.9375 24.3317 16.875 24.3317 10.6875C24.3317 4.5 19.1768 0 12.7333 0Z" fill="currentColor" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Navbar */}
				<header className="header-style-12">
					<nav className={`navbar navbar-expand-lg navbar-light navbar-blue w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
						<div className="container px-3">
							<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo5.svg" alt="" /></Link>
							<ul className="navbar-nav m-auto gap-1 align-items-lg-center @@class">
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
								<a className="btn-search-main btn-open-search" onClick={handleSearch}>
									<svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.5312 18.8438C21.1172 19.4688 21.1172 20.4453 20.5312 21.0703C19.9062 21.6562 18.9297 21.6562 18.3047 21.0703L13.6562 16.3828C12.0547 17.4375 10.1016 17.9844 7.99219 17.7109C4.39844 17.2031 1.50781 14.2734 1.03906 10.7188C0.375 5.40625 4.86719 0.914062 10.1797 1.57812C13.7344 2.04688 16.6641 4.9375 17.1719 8.53125C17.4453 10.6406 16.8984 12.5938 15.8438 14.1562L20.5312 18.8438ZM4.08594 9.625C4.08594 12.3984 6.3125 14.625 9.08594 14.625C11.8203 14.625 14.0859 12.3984 14.0859 9.625C14.0859 6.89062 11.8203 4.625 9.08594 4.625C6.3125 4.625 4.08594 6.89062 4.08594 9.625Z" fill="#141416" />
									</svg>
								</a>
								<a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu">
									<svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line x1="0.46875" y1={1} x2="17.4688" y2={1} stroke="#141416" strokeWidth={2} />
										<line x1="0.46875" y1={8} x2="17.4688" y2={8} stroke="#141416" strokeWidth={2} />
										<line x1="0.46875" y1={15} x2="17.4688" y2={15} stroke="#141416" strokeWidth={2} />
									</svg>
								</a>
								<Link href="#" className="btn btn-primary-home d-none d-lg-inline-block">
									Learn more
								</Link>
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
			</div>

		</>
	)
}
