import Menu from "./models/Menu";

const menuData = {
    "data": [
        {
            "name": "Some node 1",
            "children": [
                {
                    "name": "Some node 1.1",
                    "children": [
                        {
                            "name": "Some node 1.1.1"
                        }
                    ]
                },
                {
                    "name": "Some node 1.2"
                },
                {
                    "name": "Some node 1.3",
                    "children": [
                        {
                            "name": "Some node 1.3.1"
                        }
                    ]
                },
                {
                    "name": "Some node 1.4"
                }
            ]
        },
        {
            "name": "Some node 2"
        }
    ]
}

let loading: boolean;

let loadedMenu: Menu[];

async function getMenu() {
    const url = "https://run.mocky.io/v3/d542c15d-02d3-490e-9d57-97180d1ef8c6";
    loading = true;
    await fetch(url)
        .then(response => {
            return response.json();
        }).then(result => {
            loadedMenu = result.data;
            console.log(loadedMenu);
            return result.data;
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            loading = false;
        })
}

getMenu();
export { menuData, loading, loadedMenu };