var names = new Array();
names[0]="Lochana";
names[1]="Maleesha";
names[2]="Thilakarathne";
names[3]="Kavindhya";
names[4]="Samudini";
names[5]="Abeykoon";



for (var i = 0; i < names.length; i++){
    if(names[i].charAt(0)=='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i])
    } else {
        console.log("hello " + names[i])
    }
}