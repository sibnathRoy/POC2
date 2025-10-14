import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home15/Section1'
import Section10 from '@/components/sections/home15/Section10'
import Section2 from '@/components/sections/home15/Section2'
import Section3 from '@/components/sections/home15/Section3'
import Section4 from '@/components/sections/home15/Section4'
import Section5 from '@/components/sections/home15/Section5'
import Section6 from '@/components/sections/home15/Section6'
import Section7 from '@/components/sections/home15/Section7'
import Section8 from '@/components/sections/home15/Section8'
import Section9 from '@/components/sections/home15/Section9'
export default function Home15() {

	return (
		<>

			<Layout headerStyle={15} footerStyle={15}>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
				<Section10 />
			</Layout>
		</>
	)
}