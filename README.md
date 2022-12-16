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