const reduceFooterJson = footerJson.slices.slice(0, footerJson.slices.length - 1).reduce((acc, curr) => {
			const { list_section } = curr.primary
			acc.push({
				list_section,
				items: curr.items
			})
			return acc
		},[])
