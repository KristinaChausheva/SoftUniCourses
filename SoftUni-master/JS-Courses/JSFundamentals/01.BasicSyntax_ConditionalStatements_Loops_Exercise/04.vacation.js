function price(people, typeGroup, dayOfWeek) {
    price = 0;
    total = 0;
    if (dayOfWeek == "Friday") {
        if (typeGroup == "Students") {
            price = 8.45;
            total = people * price;
            if (people >=30) {
                discount = total * 0.15;
                total = total - discount;
            }
        }
        else if (typeGroup == "Business") {
            price = 10.9;
            total = people * price;
            if (people >= 100) {
                discount = total * 0.1;
                total = total - discount;
            }
        }
        else if (typeGroup == "Regular") {
            price = 15;
            total = people * price;
        }
    }
    else if (dayOfWeek == "Saturday") {
        if (typeGroup == "Students") {
            price = 9.8;
            total = people * price;
            if (people >=30) {
                discount = total * 0.15;
                total = total - discount;
            }
        }
        else if (typeGroup == "Business") {
            price = 15.6;
            total = people * price;
            if (people >= 100) {
                discount = total * 0.1;
                total = total - discount;
            }
        }
        else if (typeGroup == "Regular") {
            price = 20;
            total = people * price;
        }
    }
    else if (dayOfWeek == "Sunday") {
        if (typeGroup == "Students") {
            price = 10.46;
            total = people * price;
            if (people >=30) {
                discount = total * 0.15;
                total = total - discount;
            }
        }
        else if (typeGroup == "Business") {
            price = 16;
            total = people * price;
            if (people >= 100) {
                discount = total * 0.1;
                total = total - discount;
            }
        }
        else if (typeGroup == "Regular") {
            price = 22.5;
            total = people * price;
        }
    }
    console.log(`Total price: ${total}`);
}
price(30, "Students", "Sunday") 