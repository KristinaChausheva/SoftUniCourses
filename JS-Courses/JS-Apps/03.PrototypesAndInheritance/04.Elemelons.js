function result() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly')
            }
            this.weight = weight;
            this.melonSort = melonSort;
            
        }
    }
    
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
    
        }
    
        get elIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elIndex}`;
        }
    }
    
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
    
        }
    
        get elIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elIndex}`;
        }
    }
    
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
    
        }
    
        get elIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elIndex}`;
        }
    }
    
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
    
        }
    
        get elIndex() {
            return this.weight * this.melonSort.length;
        }
    
        toString() {
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elIndex}`;
        }
    }
    
    class Melolemonmelon extends Watermelon {
        
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = [`Water`,`Fire`, `Earth`, `Air` ];
        }
        
        morph() {
            //let elements = [`Water`,`Fire`, `Earth`, `Air`];
            let currentElement = this.elements.shift();
            this.elements.push(currentElement);
            return currentElement;
        }
    
        toString() {
            return `Element: ${this.morph()}\nSort: ${this.melonSort}\nElement Index: ${this.elIndex}`;
        }
    }

    return {
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melon,
        Melolemonmelon
    }
}

let classes = result();

let m = new classes.Melolemonmelon(3, "rosa");
m.morph();
m.morph();

//console.log(m.morph());
//console.log(m.toString());
//console.log(m.morph());
console.log(m.toString());

// console.log(m.morph());

