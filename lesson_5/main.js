const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem , target , target2, isTrue = 2) => {
    elem.addEventListener('input' , () => {
        const request = new XMLHttpRequest()
        request.open('GET' , 'data.json')
        request.setRequestHeader('Content-Type' , 'application/json')
        request.send()

        request.addEventListener('load' , () => {
            const data = JSON.parse(request.response)
            if (isTrue === 42) {
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.euro).toFixed(2)
            } else if (isTrue === '') {
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = ((data.usd / data.euro) * elem.value).toFixed(2)
            } else if (isTrue === 3) {
                target.value = (elem.value * data.euro).toFixed(2)
                target2.value = ((data.euro / data.usd) * elem.value).toFixed(2)
            }

            if (elem.value === '') {
                target.value = ''
                target2.value = ''
            }

        })
    })
}


convert(som , usd , euro , 42)
convert(usd , som , euro ,'')
convert(euro , som , usd , 3)



// som.addEventListener('input' , (e) => {
//     const request = new XMLHttpRequest()
//     request.open('GET' , 'data.json')
//     request.setRequestHeader('Content-Type' , 'application/json')
//     request.send()
//
//     request.addEventListener('load' , () => {
//         const data = JSON.parse(request.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//         euro.value = (som.value / data.euro).toFixed(2)
//         if (som.value === '') {
//             usd.value = ''
//             euro.value = ''
//         }
//     })
// })
// usd.addEventListener('input' , (e) => {
//     const request = new XMLHttpRequest()
//     request.open('GET' , 'data.json')
//     request.setRequestHeader('Content-Type' , 'application/json')
//     request.send()
//
//     request.addEventListener('load' , () => {
//         const data = JSON.parse(request.response)
//         som.value = (usd.value / data.usd).toFixed(2)
//         euro.value = ((data.usd / data.euro) * usd.value).toFixed(2)
//         if (usd.value === '') {
//             som.value = ''
//             euro.value = ''
//         }
//     })
// })
// euro.addEventListener('input' , (e) => {
//     const request = new XMLHttpRequest()
//     request.open('GET' , 'data.json')
//     request.setRequestHeader('Content-Type' , 'application/json')
//     request.send()
//
//     request.addEventListener('load' , () => {
//         const data = JSON.parse(request.response)
//         som.value = (euro.value * data.euro).toFixed(2)
//         usd.value = ((data.euro / data.usd) * euro.value).toFixed(2)
//         if (euro.value === '') {
//             som.value = ''
//         }
//     })
// })