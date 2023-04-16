<i onclick="handleBookmark('${product.name}', '${product.id}', '${product.price}')" class="fa-regular fa-bookmark"></i>


const handleBookmark = (name, id, price) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));

    let bookmark = [];

    let product = {
        name,
        id,
        price,
        bookmark: true
    };

    console.log(previousBookmark); // log the previousBookmark to see its current value

    if (previousBookmark) {
        const isThisProductMarked = previousBookmark.find((pd) => (pd.id === id));
        console.log(isThisProductMarked) // log isThisProductMarked to see its value
    }
    else {
        bookmark.push(product)
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        console.log(JSON.parse(localStorage.getItem("bookmark"))); // log the bookmark array to verify it was saved to localStorage correctly
    }
};