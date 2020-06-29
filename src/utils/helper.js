export const to = async (anyPromise) => {
    try {
        return {
            result: {
                type: 'success',
                apiResponse: await anyPromise
            }
        }
    } catch (error) {
        return {
            err: {
                type: 'failure',
                apiResponse: error,
                apiMessage: "System encountered error. Please try again later."
            }
        };
    }

}

export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const getJwtToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.accessToken;
}
export const getCurrentUserID = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.id
}

export const updateChart = (id, price, qte) => {
    const chart = JSON.parse(localStorage.getItem('chart'));
    chart.forEach(product => {
        if (product.id === id) {
            product.price = price;
            product.qte = qte;
        }
    });
    setToLocalStorage('chart', chart);
}

export const updateUserInLocalStorage = ({ fname, lname, email, role }) => {
    const user = getFromLocalStorage('user');
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.roles = role;
    setToLocalStorage('user', user);
}
export const authHeader = () => ({
    headers: { Authorization: 'Bearer ' + getJwtToken() }
})

export const setToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}