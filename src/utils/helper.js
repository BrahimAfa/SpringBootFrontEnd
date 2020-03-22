export const to = async (anyPromise) => {

    anyPromise.then((json) => {
        console.log
            ()
    })
        .catch((error) => {
            console.log();
        })
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
export const setToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}