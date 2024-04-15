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

<br/>
<br/>

### *Auteur: Raphaël Boudreault***

* Utilisation très bien bootsrap 

* La variable props n'est pas utilisé. Peut causer de futur conflit avec les variables

* Implémentation non désiré de retourner sur une partie quitté

```vue
<RouterLink to="/game" class="text-decoration-none h2 me-3">Titre du jeu</RouterLink>
```