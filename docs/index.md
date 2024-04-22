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



## Semaine 11:

### *Auteur: Raphaël Boudreault***

* Intéressante utilisation d'interface pour le status de la partie

* Joli fenêtre pour confirmer si l'utilisateur veut quitter

* Utilisation de chiffre magique dans un switch case
    (Lorsque pourtant il existe des constantes)
```ts
const experiences: { [key: number]: string } = {
    1: "Débutant",
    2: "Confirmé",
    3: "Expert",
    4: "Maitre"
}

switch (experience) {
    case 1:
        odds = 0.2
        break;
    case 2:
        odds = 0.35
        break;
    case 3:
        odds = 0.5
        break;
    case 4:
        odds = 0.7
        break;
    default:
        throw new Error("Invalid experience level")
}
```