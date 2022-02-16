async function loadMenuFromApi() {
    await fetch('https://run.mocky.io/v3/d542c15d-02d3-490e-9d57-97180d1ef8c6').then(res =>
        res.json()
    ).then(result => {
        return result.data;
    })
}

export default loadMenuFromApi;