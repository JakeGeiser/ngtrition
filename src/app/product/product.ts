export interface Product {
    id: string // code
    name: string 
    keywords: string[] // _keywords
    ingredients: string  // ingredients_text_en
    nutriments: object // nutriments has all nutrition (calories are kcal)
    nutriscore: object // nutriscore_data (mostly care about score and grade)
    imageFrontDisplay: string // selected images>front>display
    imageFrontThumb: string // selected images>front>thumb
    imageNutritionDisplay: string // selected images>nutrition>display
}
