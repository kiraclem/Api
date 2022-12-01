let button = document.querySelector('#btn')

//===========================================

const getResidents = evt => {
    resDiv.innerhtml = ''
    axios.get('https://swapi.dev/api/planets/2/')
    .then (response => {
        let { data } = response
        // console.log(data)
        let { residents } = data
        // console.log(residents)
        for ( i = 0; i < 3; i++ ) {
            // console.log(residents[i])
            axios.get(`${residents[i]}`)
            .then (resp => {
                console.log(resp.data)
                let { name } = resp.data
                console.log(name)
                
                const residentNames = document.createElement('h2')
                residentNames.textContent = name
                resDiv.appendChild(residentNames)
            }

            )
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
}





//============================================

button.addEventListener('click', getResidents)