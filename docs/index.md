# **Revue de code**

## Semaine 10:



### *Auteur: Nicolas Dubé***

* Avait mal implémenté les services dans le code, mais a corrigé depuis<br />
* A bien implémenté le principe de routes avec RouterView<br />
* A bien implémenté une fonction de triage pour le 'Ranking':

```
//Pour comparer par le score
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
ranking.sort((a, b) => {
const scoreA = a.score
const scoreB = b.score
if (scoreA < scoreB) {
return 1
}
if (scoreA > scoreB) {
return -1
}
return 0
})
```
