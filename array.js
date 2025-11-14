let filmes = ["jogos vorazes", "jogos vorazes 2", "jogos vorazes3"]



console.log ("")

filmes.push ("jogos vorazes 4")/* add no final */
filmes.unshift ("jogos vorazes 0")/* add no incio   */ 
filmes.pop ()/* remove ultimo indice do array */
filmes.shift ()/* remove o primeiro array */
console.log (filmes [1])    

for(let i = 0; i < filmes.length; i++) { 
    console.log (filmes [i])

}

