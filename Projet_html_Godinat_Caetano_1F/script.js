function validerQuestionaire(){
    var assassin = 0;
    var adc = 0;
    var mage = 0;
    var bruiser = 0;
    var tank = 0;
    var support = 0;
    for (let i = 0; i < document.getElementsByName('role').length; i++) {   //Une boucle for , Pour chaque element dans la liste de nom 'role'
        if(document.getElementsByName("role")[i].checked){                  //Si la case est checked
            switch(document.getElementsByName('role')[i].id) {              //on prend son id et on vérifie à quel valeur correspond son ID
                case "Q1/0":
                    assassin++;
                    break;
                case "Q1/1":
                    adc++;
                    break;
                case "Q1/2":
                    mage++;
                    break;
                case "Q1/3":
                    bruiser++;
                    break;
                case "Q1/4":
                    tank++;
                    break;
                case "Q1/5":
                    support++;
                    break;
                case "Q2/0":
                    assassin++;
                    break;
                case "Q2/1":
                    adc++;
                    break;
                case "Q2/2":
                    mage++;
                    break;
                case "Q2/3":
                    bruiser++;
                    break;
                case "Q2/4":
                    tank++;
                    break;
                case "Q2/5":
                    support++;
                    break;
                case "Q3/0":
                    assassin++;
                    break;
                case "Q3/1":
                    adc++;
                    break;
                case "Q3/2":
                    mage++;
                    break;
                case "Q3/3":
                    bruiser++;
                    break;
                case "Q3/4":
                    tank++;
                    break;
                case "Q3/5":
                    support++;
                    break;
                case "Q4/0":
                    assassin++;
                    break;
                case "Q4/1":
                    adc++;
                    break;
                case "Q4/2":
                    mage++;
                    break;
                case "Q4/3":
                    bruiser++;
                    break;
                case "Q4/4":
                    tank++;
                    break;
                case "Q4/5":
                    support++;
                    break;
                case "Q5/0":
                    assassin++;
                    break;
                case "Q5/1":
                    adc++;
                    break;
                case "Q5/2":
                    mage++;
                    break;
                case "Q5/3":
                    bruiser++;
                    break;
                case "Q5/4":
                    tank++;
                    break;
                case "Q5/5":
                    support++;
                    break;
                case "Q6/0":
                    assassin++;
                    break;
                case "Q6/1":
                    adc++;
                    break;
                case "Q6/2":
                    mage++;
                    break;
                case "Q6/3":
                    bruiser++;
                    break;
                case "Q6/4":
                    tank++;
                    break;
                case "Q6/5":
                    support++;
                    break;
                case "Q7/0":
                    assassin++;
                    break;
                case "Q7/1":
                    adc++;
                    break;
                case "Q7/2":
                    mage++;
                    break;
                case "Q7/3":
                    bruiser++;
                    break;
                case "Q7/4":
                    tank++;
                    break;
                case "Q7/5":
                    support++;
                    break;
                case "Q8/0":
                    assassin++;
                    break;
                case "Q8/1":
                    adc++;
                    break;
                case "Q8/2":
                    mage++;
                    break;
                case "Q8/3":
                    bruiser++;
                    break;
                case "Q8/4":
                    tank++;
                    break;
                case "Q8/5":
                    support++;
                    break;
                case "Q9/0":
                    assassin++;
                    break;
                case "Q9/1":
                    adc++;
                    break;
                case "Q9/2":
                    mage++;
                    break;
                case "Q9/3":
                    bruiser++;
                    break;
                case "Q9/4":
                    tank++;
                    break;
                case "Q9/5":
                    support++;
                    break;
                case "Q10/0":
                    assassin++;
                    break;
                case "Q10/1":
                    adc++;
                    break;
                case "Q10/2":
                    mage++;
                case "Q10/3":
                    bruiser++;
                    break;
                case "Q10/4":
                    tank++;
                    break;
                case "Q10/5":
                    support++;
                    break;
                default:
                    break;
                
            }
        }
    }
    var role = Math.max(assassin, adc, mage, bruiser, tank, support); //on vérifie quelle est la variable la plus grande et on ouvre la page de la variable plus.
    switch(role) {
        case assassin:
            window.open("assassin.html");
            window.close();
            break;
        case adc:
            window.open("adc.html");
            window.close();
            break;
        case mage:
            window.open("mage.html");
            window.close();
            break;
        case bruiser:
            window.open("bruiser.html");
            window.close();
            break;
        case tank:
            window.open("tank.html");
            window.close();
            break;
        case support:
            window.open("support.html");
            window.close();  
            break;
        default:
            break;
          
    } 
}

