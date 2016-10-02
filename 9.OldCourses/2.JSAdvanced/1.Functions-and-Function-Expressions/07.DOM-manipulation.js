/**
 * Created by evgeni.tsn on 11.04.2016 г..
 */

/*Create an IIFE module for working with the DOM tree. The module should support the following operations:
 •	appendChild(element, child) – adds а DOM element to a parent element
 •	removeChild(element, child) – removes a child element from a parent element
 •	addHandler(element, eventType, eventHandler) – attaches an event to a given selector by given event type (string) and event hander
 •	retrieveElements(selector) – retrieves elements by a given CSS selector
 element and child can be selectors (strings) or DOM elements. If any selector is passed to the module, it should find (and manipulate) all elements the selector corresponds to.
 The module should reveal only its public methods (i.e. everything else should be encapsulated).
 */

/*RUN THIS IS BROWSER*/
/*RUN THIS IS BROWSER*/
/*RUN THIS IS BROWSER*/

var domModule = (function () {
    var getElement = function (selector) {
        return document.querySelector(selector);
    };

    function appendChild(parent, child) {
        if (!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if (!(child instanceof Element)){
            child = getElement(child);
        }

        parent.appendChild(child);
    }

    function removeChild(parent, child) {

        if (!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        parent.removeChild(child);
    }
    
    function retreiveElements(selector) {
        return document.querySelectorAll(selector);
    }
    
    function addHandler(elements, eventType, eventHandler) {
        if (!(elements instanceof Element) && !Array.isArray(elements)) {
            elements = retreiveElements(elements);
        }

        if (!elements) {
            throw new ReferenceError("The element(s) requested could not be found.");
        }

        for (var i in elements) {
            if (elements[i] instanceof HTMLElement) {
                elements[i].addEventListener(eventType, eventHandler, false);
            }
        }
    }
    return{
        appendChild : appendChild,
        removeChild : removeChild,
        addHandler : addHandler,
        retrieveElements : retreiveElements
    };
}());

var liElement = document.createElement("li");
// adds a new child of type li to the end of the child-nodes list
domModule.appendChild(".birds-list", liElement);
// moves first child node to the end of the child-nodes list
domModule.appendChild(".birds-list", "li:first-child");
// removes the current first child node
domModule.removeChild(".birds-list", "li:first-child");
// adds a handler to every node of type li, class bird
domModule.addHandler("li.bird", "click", function () {alert("I'm a bird!")});
// retrieves all nodes of class bird
var elements = domModule.retrieveElements(".bird");
console.log(domModule);