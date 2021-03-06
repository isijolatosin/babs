import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'
import Layout from '../components/shared/Layout'

const Contact = function () {
	const [allProd, setAllProd] = React.useState([])
	const [searchData, setSearchData] = React.useState([])
	const [dance, setDance] = React.useState([])
	const [search, setSearch] = React.useState('')
	const [boldness, setBoldness] = React.useState([])
	const [consume, setConsume] = React.useState([])
	const [isNotSearch, setIsNotSearch] = React.useState(false)
	const navigate = useNavigate()
	async function fetchProducts() {
		try {
			const {
				data: { products },
			} = await axios.get('/api/v1/products')

			setAllProd(products)

			setTimeout(() => {
				setDance(
					products
						.filter((x) => x.series.toLowerCase() === 'dance')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
				setBoldness(
					products
						.filter((x) => x.series.toLowerCase() === 'boldness')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
				setConsume(
					products
						.filter((x) => x.series.toLowerCase() === 'consume by motions')
						.sort((a, b) => a.length.localeCompare(b.length))
				)
			}, 2000)
		} catch (error) {
			console.log(error)
		}
	}
	React.useEffect(() => {
		fetchProducts()
	}, [])

	const handleRequest = (values) => {
		localStorage.setItem('requestData', JSON.stringify(values))
		navigate('/contact-joelarueyastudio')
	}

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const onSearch = (e) => {
		e.preventDefault()
		const filter = allProd.filter((d) =>
			d?.name.toLowerCase().includes(search.toLowerCase())
		)
		if (filter) {
			setSearchData(filter)
			setIsNotSearch(true)
			setSearch('')
		}
	}

	return (
		<>
			<Helmet>
				<title>artkolawolejohnson: GALLERY-PAGE</title>
			</Helmet>
			<Layout>
				<div className="relative home">
					<div className="flex py-10 mb-10 md:mb-[50px] justify-center md:pt-20">
						<Search
							search={search}
							onChange={handleChange}
							onSearch={onSearch}
							setSearchData={setSearchData}
							setIsNotSearch={setIsNotSearch}
							data={searchData}
						/>
					</div>
					{isNotSearch && (
						<div className="flex bg-white flex-wrap shadow-lg items-center justify-center">
							{searchData.map((search) => (
								<div
									key={search._id}
									className="relative w-[80%] md:w-[250px] m-2">
									<div className="w-full">
										<img
											className="h-[350px] w-full md:w-[250px] object-cover"
											src={search.image}
											alt={search.name}
										/>
									</div>
									<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
										<div className="h-[50%]">
											<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
												{search.name}
											</p>
											<p className="text-blue-900 absolute top-0 right-2">
												Dim: {search.length}
											</p>
											<p className="w-full px-2 text-[11.5px] mt-4 text-gray-700 text-center font-light">
												{search.description}
											</p>
										</div>
										<div className="w-full h-[35%]">
											<button
												onClick={() => handleRequest(search)}
												className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
												Request customize
											</button>
											<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
												Add to cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
					{dance.length === 0 &&
					boldness.length === 0 &&
					consume.length === 0 ? (
						<div className="tw-rounded-full absolute top-[130px] md:top-[170px] progress">
							<div className="inner"></div>
						</div>
					) : (
						<>
							{!isNotSearch && (
								<div
									className={`${
										boldness.length === 0 ||
										(dance.length === 0 ? 'md:grid-cols-1' : 'md:grid-cols-2')
									} grid grid-cols-1 md:pt-10`}>
									{dance.length !== 0 && (
										<div className="bg-white pt-5">
											<h1 className="pl-5 text-xl font-bold">DANCE SERIES</h1>
											<div className="flex flex-wrap shadow-lg items-center justify-center">
												{dance.map((d) => (
													<div
														key={d._id}
														className="relative w-[80%] md:w-[250px] m-2">
														<div className="w-full">
															<img
																className="h-[350px] w-full md:w-[250px] object-cover"
																src={d.image}
																alt={d.name}
															/>
														</div>
														<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
															<div className="h-[50%]">
																<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
																	{d.name}
																</p>
																<p className="text-blue-900 absolute top-0 right-2">
																	Dim: {d.length}
																</p>
																<p className="w-full px-2 text-[11.5px] mt-4 text-gray-700 text-center font-light">
																	{d.description}
																</p>
															</div>
															<div className="w-full h-[35%]">
																<button
																	onClick={() => handleRequest(d)}
																	className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
																	Request customize
																</button>
																<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
																	Add to cart
																</button>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									)}
									{boldness.length !== 0 && (
										<div className="bg-white  mt-40 md:mt-0 md:pt-0">
											<h1 className="mt-5 pt-5 md:mt-0 pl-5 text-xl font-bold">
												BOLDNESS SERIES
											</h1>
											<div className="flex flex-wrap shadow-lg items-center justify-center">
												{boldness.map((b) => (
													<div
														key={b._id}
														className="relative w-[80%] md:w-[250px] m-2">
														<div className="w-full">
															<img
																className="h-[350px] w-full md:w-[250px] object-cover"
																src={b.image}
																alt={b.name}
															/>
														</div>
														<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
															<div className="h-[50%]">
																<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
																	{b.name}
																</p>
																<p className="text-blue-900 absolute top-0 right-2">
																	Dim: {b.length}
																</p>
																<p className="w-full text-[11.5px] px-2 mt-4 text-gray-700 text-center font-light">
																	{b.description}
																</p>
															</div>
															<div className="w-full h-[35%]">
																<button
																	onClick={() => handleRequest(b)}
																	className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
																	Request customize
																</button>
																<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
																	Add to cart
																</button>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							)}
							{!isNotSearch && consume.length !== 0 && (
								<div className="mt-40 mb-10 shadow-lg bg-white pt-10 ">
									<h1 className="pl-5 text-xl font-bold">
										CONSUME BY MOTION SERIES
									</h1>
									<div className="flex flex-wrap items-center justify-center">
										{consume.map((c) => (
											<div
												key={c._id}
												className="relative w-[80%] md:w-[250px] m-2">
												<div className="w-full">
													<img
														className="h-[350px] w-full md:w-[250px] object-cover"
														src={c.image}
														alt={c.name}
													/>
												</div>
												<div className="absolute shadow-lg bottom-0 bg-white h-[100px] text-[10px]">
													<div className="h-[50%]">
														<p className="absolute top-[-10px] bg-white px-2 rounded-t-sm ">
															{c.name}
														</p>
														<p className="text-blue-900 absolute top-0 right-2">
															Dim: {c.length}
														</p>
														<p className="w-full px-2 text-[11.5px] mt-4 text-gray-700 text-center font-light">
															{c.description}
														</p>
													</div>
													<div className="w-full h-[35%]">
														<button
															onClick={() => handleRequest(c)}
															className="w-[50%] h-full bg-orange-300 hover:bg-orange-600 text-white border-r-[1px] border-white ease duration-300">
															Request customize
														</button>
														<button className="w-[50%] bg-gray-400 hover:bg-gray-600 text-white h-full ease duration-300">
															Add to cart
														</button>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</Layout>
		</>
	)
}

export default Contact
