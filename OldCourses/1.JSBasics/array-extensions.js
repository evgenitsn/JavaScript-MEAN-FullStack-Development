/*Removes the first element found from left to right in the array
Second argument should be truthy to remove all elements*/
Array.prototype.remove = function(arg, all){
    for(var i = 0; i < this.length; i++){
        if(this[i] === arg){
            this.splice(i,1);

            if(!all)
                break;
            else
                i--;
        }
    }
};

//Removes the element at the position
Array.prototype.removeAt = function(position){
    this.splice(position,1);
};

//Removes all elements of the array
Array.prototype.clear = function(){
    this.length = 0;
};

//inserts an element at a given position
Array.prototype.insertAt = function(arg, position){
    this.splice(position, 0, arg);
};

//Checks if the array contains the given element
Array.prototype.contains = function(arg){
    for(var i = 0; i < this.length; i++)
        if(this[i] === arg)
            return true;
    return false;
};

//Counts the occurrences of a given element in array
Array.prototype.occurs = function(arg){
    var counter = 0;

    for(var i = 0; i< this.length; i++){
        if(this[i] === arg)
            counter++;
    }

    return counter;
};