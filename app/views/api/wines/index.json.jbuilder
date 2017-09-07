@wines.each do |wine|
	json.set! wine.id do
		json.extract! wine, :name
	end
end