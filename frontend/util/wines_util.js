export const scrapeWines = () => {
	return $.ajax({
		method: 'GET',
		url: 'api/wines'
	})
}