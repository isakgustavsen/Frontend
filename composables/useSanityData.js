/*
composable for loading and previewing data from sanity 
*/
export default async function ({ query, params, livePreview = true }) {
	// get data
	const { data, refresh } = await useLazySanityQuery(
		query,
		params,
		sanityClient
	)

	return data
}