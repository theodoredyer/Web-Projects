function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to + ${location}`)
        if(location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to googs')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then(respone => {
    console.log('Response Received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if(a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('in the then + ' + message)
// }).catch((message) => {
//     console.log('in catch + ' + message)
// })