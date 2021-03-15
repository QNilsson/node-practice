import { Recipe } from '../models/recipe.js'


export const addRecipe = ((req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        servings: req.body.servings,
        time: req.body.readyInMinutes,
        image: req.body.image,
       
    })
    console.log(recipe)
    recipe.save() // save method is provided by Mongoose
    res.json(recipe)
})

/* export const getAllProducts = ((req, res) => {
    Product.find()
        .then(products => {
        res.json(products)
        })
    .catch(err => console.log(err))
}) */

export const recipes = async (req, res) => {
    const recipes = await Recipe.find()
    if (!recipes.length) {
        return res.status(400).json({Message: `No recipes found`})
    }
    res.json(recipes)
}

// export const getProductById = async (req, res) => {
//     const prodId = req.body.productId
//     console.log(prodId)
//     try {
//         const product = await Product.findById(prodId)
//         if (!product) {
//             return res.status(404).json({ Message: 'Product not Found' })
//         }
//         res.json(product)
//     } catch(err) {
//         res.status(400).json({Message: `Invalid ID: ${err}`})
//     }
// }

// export const putEditProduct = async (req, res) => {
//     const prodId = req.body.productId
//     const updatedObj = {
//         title: req.body.title,
//         price: req.body.price, // typeof ? (if string then parsed by Mongoose, else number by body-parser)
//         description: req.body.description,
//         imageUrl: req.body.imageUrl,
//     }
//     try {
//         const product = await Product.findByIdAndUpdate(prodId, updatedObj, { new: true })
//         res.json(product)
//     } catch (err) {
//         res.status(400).json({Message: `Could not update: ${err}`})
//     }
// }

export const deleteRecipe = async (req, res) => {
    console.log(req.body)
    const recipeID = req.body.recipeID
    try {
        const deletedRecipe= await Recipe.findByIdAndRemove(recipeID)
        if (!deletedRecipe) {
            return res.status(400).json({Message: `Recipe to delete not found.`})
        }
        console.log(`Deleted the recipe: ${deletedRecipe}`)
        res.sendStatus(200) // a simple success
    } catch (err) {
        res.status(400).json({Message: `Invalid Label: ${err}`})
    }

}