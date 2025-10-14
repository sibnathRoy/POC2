'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup7 } from '@/util/swiperOptions'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NewsGrid() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner box-blog-single-banner">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Blog Page</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Blog Page</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Blog Section 2 */}
				<section className="box-section box-contact-section-2">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">IT Solutions That Drive Innovation in Your Business</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog2.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">From Risk to Resilience: Strengthening IT Security</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog3.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Building a Robust IT Ecosystem for Your Enterprise</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog4.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Harnessing the Power of AI in IT Solutions</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog5.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Transforming Small Businesses with IT Automation</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog6.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Navigating the Digital Landscape with Smart IT Solutions</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog7.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Leveraging IT for Competitive Advantage in Business</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog8.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Cloud vs. On-Premise: Which IT Solution is Right for You?</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-blog-7">
									<div className="card-image">
										<Link href="/news-details"><img src="/assets/imgs/pages/blog/blog9.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="text-end mb-2">
											<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
										</div>
										<Link href="/news-details" className="heading-md">Maximizing ROI Through Strategic IT Investments</Link>
										<Link href="/news-details" className="link-more button-ag-bold">
											Discover More
											<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-paginations text-center">
							<nav>
								<ul className="pagination">
									<li className="page-item">
										<Link className="page-link" href="#">
											<svg width={13} height={16} viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M7.68269 15.811C7.6281 15.871 7.56286 15.9186 7.49083 15.951C7.4188 15.9835 7.34144 16.0001 7.26331 16C7.18518 15.9999 7.10787 15.983 7.03593 15.9503C6.96399 15.9176 6.89889 15.8698 6.84448 15.8097L0.182493 8.48072C0.065486 8.35201 9.53674e-07 8.17939 9.53674e-07 7.99965C9.53674e-07 7.81992 0.065486 7.6473 0.182493 7.51859L6.84448 0.189653C6.89898 0.129633 6.96415 0.0819283 7.03613 0.0493546C7.10811 0.0167809 7.18545 0 7.26358 0C7.34171 0 7.41905 0.0167809 7.49103 0.0493546C7.56302 0.0819283 7.62818 0.129633 7.68269 0.189653C7.79482 0.312741 7.8576 0.477977 7.8576 0.650039C7.8576 0.822101 7.79482 0.987335 7.68269 1.11042L1.41796 7.99965L7.68269 14.8916C7.79444 15.0147 7.85697 15.1796 7.85697 15.3513C7.85697 15.5231 7.79444 15.688 7.68269 15.811ZM12.8251 15.811C12.7705 15.871 12.7053 15.9186 12.6332 15.951C12.5612 15.9835 12.4838 16.0001 12.4057 16C12.3276 15.9999 12.2503 15.983 12.1783 15.9503C12.1064 15.9176 12.0413 15.8698 11.9869 15.8097L5.3249 8.48072C5.20789 8.35201 5.1424 8.17939 5.1424 7.99965C5.1424 7.81992 5.20789 7.6473 5.3249 7.51859L11.9869 0.189653C12.0414 0.129633 12.1066 0.0819283 12.1785 0.0493546C12.2505 0.0167809 12.3279 0 12.406 0C12.4841 0 12.5615 0.0167809 12.6334 0.0493546C12.7054 0.0819283 12.7706 0.129633 12.8251 0.189653C12.9372 0.312741 13 0.477977 13 0.650039C13 0.822101 12.9372 0.987335 12.8251 1.11042L6.56036 7.99965L12.8251 14.8916C12.9368 15.0147 12.9994 15.1796 12.9994 15.3513C12.9994 15.5231 12.9368 15.688 12.8251 15.811Z" fill="currentColor" />
											</svg>
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" href="#">1</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" href="#">2</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" href="#">3</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" href="#">4</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" href="#">
											<svg width={13} height={16} viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.31731 15.811C5.3719 15.871 5.43714 15.9186 5.50917 15.951C5.5812 15.9835 5.65856 16.0001 5.73669 16C5.81482 15.9999 5.89214 15.983 5.96407 15.9503C6.03601 15.9176 6.10111 15.8698 6.15552 15.8097L12.8175 8.48072C12.9345 8.35201 13 8.17939 13 7.99965C13 7.81992 12.9345 7.6473 12.8175 7.51859L6.15552 0.189653C6.10102 0.129633 6.03585 0.081928 5.96387 0.0493546C5.89189 0.0167811 5.81455 0 5.73642 0C5.65829 0 5.58095 0.0167811 5.50897 0.0493546C5.43698 0.081928 5.37182 0.129633 5.31731 0.189653C5.20518 0.312741 5.1424 0.477977 5.1424 0.650039C5.1424 0.8221 5.20518 0.987335 5.31731 1.11042L11.582 7.99965L5.31731 14.8916C5.20556 15.0147 5.14303 15.1796 5.14303 15.3513C5.14303 15.5231 5.20556 15.688 5.31731 15.811ZM0.174909 15.811C0.2295 15.871 0.294735 15.9186 0.366764 15.951C0.438792 15.9835 0.516156 16.0001 0.594286 16C0.672417 15.9999 0.749733 15.983 0.821668 15.9503C0.893604 15.9176 0.958702 15.8698 1.01312 15.8097L7.6751 8.48072C7.79211 8.35201 7.8576 8.17939 7.8576 7.99965C7.8576 7.81992 7.79211 7.6473 7.6751 7.51859L1.01312 0.189653C0.958617 0.129633 0.89345 0.081928 0.821468 0.0493546C0.749485 0.0167811 0.672146 0 0.594015 0C0.515884 0 0.438545 0.0167811 0.366563 0.0493546C0.29458 0.081928 0.229414 0.129633 0.174909 0.189653C0.0627762 0.312741 0 0.477977 0 0.650039C0 0.8221 0.0627762 0.987335 0.174909 1.11042L6.43964 7.99965L0.174909 14.8916C0.0631609 15.0147 0.000626815 15.1796 0.000626815 15.3513C0.000626815 15.5231 0.0631609 15.688 0.174909 15.811Z" fill="currentColor" />
											</svg>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</section>
				{/* Blog Section 3 */}
				<section className="box-section box-contact-section-2">
					<div className="container-slide">
						<div className="box-swiper">
							<Swiper {...sliderGroup7} className="swiper-container slider-group-7">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo2.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo3.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo4.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo5.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo6.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo7.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo.svg" />
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>


			</Layout >
		</>
	)
}