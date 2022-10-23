const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const btn = document.querySelector('.button')
const btnLog  = document.querySelector('.login')


const users = ["Evgenii","Vadim",["00101202215478","qwerty","125042000000258","79451789841256"]]

btnLog.addEventListener('click',(e)=>{
    e.preventDefault()
    users.push(inp1.value)
    users[2].push(inp2.value)
    inp1.value = ""
    inp2.value = ''
})

btn.addEventListener('click',(e)=>{
   
    e.preventDefault()
    users.map(function (login){
        if(login===inp1.value){

            users[2].map(function (parol) {
                if (parol === inp2.value) {
                    alert("Login:"+" "+inp1.value+" "+"Parol:" +' ' + inp2.value)
                    inp2.value=''
                    inp1.value = ""
                }
            }
            )
        }
    })
    })





