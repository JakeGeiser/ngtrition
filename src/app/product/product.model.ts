export class Product {
    // many properties have categories to tell if they exist or are calculated, tyr to use them
    public id: string; // code
    public name: string;
    public keywords: string[]; // _keywords
    public ingredients: string; // ingredients_text_en
    public nutriments: object; // nutriments has all nutrition (calories are kcal)
    public nutriscore: object; // nutriscore_data (mostly care about score and grade)
    public imageFrontDisplay: string; // selected images>front>display
    public imageFrontThumb: string; // selected images>front>thumb
    public imageNutritionDisplay: string; // selected images>nutrition>display
    
    constructor(id: string, 
                name: string, 
                keywords: string[], 
                ingredients: string, 
                nutriments: object,
                imageFrontDisplay: string,
                imageFrontThumb: string,
                imageNutritionDisplay: string) {
        this.id = id;
        this.name = name;
        this.keywords = keywords;
        this.ingredients = ingredients;
        this.nutriments = nutriments;
        this.imageFrontDisplay = imageFrontDisplay;
        this.imageFrontThumb = imageFrontThumb;
        this.imageNutritionDisplay = imageNutritionDisplay;
    }
}