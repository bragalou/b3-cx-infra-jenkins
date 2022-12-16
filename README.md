# Projet de tests unitaires sur une calculatrice
Melvin BORRELL <br>
Cyrus VALETTE

EPSI B3 C1

## Documentation d'utilisation
### Explication
La calculatrice est codé via la class (Calculator) en js, dans l'objectif d'être importé et utilisé dans d'autre projet. <br>

Pour effectuer un calcul il faut créer une nouvelle instance d'un objet à partir du constructeur et appeler la fonction .calcul() . <br>
La fonction renverra un résulat sous forme de int ou float en fonction de ce dernier. Elle pourra aussi renvoyer un string en cas d'erreur en expliquant la raison.
<br><br>


### Fonctionnement
**Instancier un objet :<br>**

  ```
  new Calculator( <nmb1> , '<operateur>', <nmb2> )
  ```

* ```<nmb1>``` : le 1er terme du calcul
* ```<nmb2>``` : le 2e terme du calcul
* ```<operateur>``` : le calcul à effectuer 
    
les valuers possible sont : <br>
```+``` : addition <br>
```-``` : soustraction <br>
```/``` : division <br>
```*``` : multiplication <br>
```%``` : calcul de pourcentage <br>
```p``` : puissance (mettre le 1er nmb a la puissance du nmb2) <br>
```r``` : calcul racine d'un nombre (ne pas mettre de nmb2) <br>
<br>

**Fonctions disponnible :** <br>
* Renvoyer les valeurs saisis :
    ```
    getValue()
    ```

* Verifier que les veleurs saisis sont correctes :
    ```
    verifyValue()
    ```

* Effectuer le calcul :
    ```
    calcul()
    ``` 
<br>

**Exécuter le code directement :** <br>
Il est possible d'exécuter un calcul directement dans le code :

```
console.log(new Calculator(1, '+', 3).getValue())
console.log(new Calculator(1, '+', 3).verifyValue())
console.log(new Calculator(1, '+', 3).calcul())

// en console :
node src/app.js
```
<br><br>

# Plan de test
### Test BDD :

Nous avons réalisés plusieurs test unitaires en BDD, Nous avons développé ces tests afin de vérifier le bon fonctionnement de la calculatrice Arithmétique que nous avons développé au préalable.

On lance ces test en utilisant la commande ```npm test``` dans le terminal.

- Test 1: Verify attribution of values : on vérifie la bonne affectation des variables
- Test 2 : Verify type of values/caracts : on vérifie le type des valeurs saisies
- Test 3: Verify type of values/caracts with error : on vérifie que l’application retourne une erreur quand les variables sont incorrectes
- Test 4 Test calcul +: On vérifie que l’addition retourne le bon résultat
- Test 5 Test calcul -: On vérifie que la soustraction retourne le bon résultat
- Test 6 Test calcul *: On vérifie que la soustraction retourne le bon résultat
- Test 7 Test calcul /: On vérifie que la division retourne le bon résultat
- Test 8 Test calcul / by 0: On vérifie que la division par 0 retourne une erreur
- Test 9 Test calcul % (pourcentage): On vérifie que les pourcentages soient corrects

### Test TDD :

Nous avons réalisés ces tests avant le développement de la partie scientifique de notre calculatrice. L’objectif est de verifier que notre développement soit conforme au critères de test que nous avons mis en place. 

On lance ces test en utilisant la commande ```npm test``` dans le terminal.

- Test 10 Verify type of values/caracts’ : on vérifie le type des valeurs saisies
- Test 11 Verify type of values/caracts with error :on vérifie que l’application retourne une erreur quand les variables sont incorrectes
- Test 12 Test calcul puissance : On vérifie que le calcul de la puissance retourne le bon résultat
- Test 13 Test calcul racine carre : On vérifie que le calcul de la racine retourne le bon résultat ou si il retourne une erreur quand il le faut
