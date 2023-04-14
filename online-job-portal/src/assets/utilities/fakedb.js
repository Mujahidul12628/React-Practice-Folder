const addToDb = (details) => {

    const storedData = localStorage.getItem('jobDetails');

    if (storedData) {
        const existingData = JSON.parse(storedData);
        localStorage.setItem('jobDetails', JSON.stringify([...existingData, details]));
    } else {
        localStorage.setItem('jobDetails', JSON.stringify([details]));
    }

}

const getFromDb = () => {

    let data = []

    const storedData = localStorage.getItem('jobDetails');
    if (storedData) {
        data = JSON.parse(storedData);
        console.log(data);
    } else {
        console.log('No data found');
    }

    return data

}

export { addToDb, getFromDb }