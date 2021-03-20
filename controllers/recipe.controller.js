import { Recipe } from '../models/recipe.js'


export const addRecipe = ((req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        servings: req.body.servings,
        time: req.body.time,
        image: req.body.image,
       
    })
    console.log(recipe)
    recipe.save() // save method is provided by Mongoose
    res.json(recipe)
})



export const recipes = async (req, res) => {
    const recipes = await Recipe.find()
    if (!recipes.length) {
        return res.status(400).json({Message: `No recipes found`})
    }
    res.json(recipes)
}

export const updateRecipe = async(req, res) =>{
    const recipeId = req.body.data.recipeId
    console.log(recipeId)
    const updatedObj = {
        title:req.body.data.title,
        servings:req.body.data.servings,
        time:req.body.data.time,
        image:req.body.data.image
    
}
try{
    const recipe = await Recipe.findByIdAndUpdate(recipeId, updatedObj, {new:true})
    console.log(recipe)
    res.status(200).json(recipe)
}catch(err){
    console.log("error")
}
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
    console.log("above is req.body")
    const recipeId = req.body.recipeId
    console.log("This is recipeId on controller")
    console.log(recipeId)
    console.log("made it to controller")
    try {
        const deletedRecipe= await Recipe.findByIdAndDelete(recipeId)
        console.log(deletedRecipe)
        console.log("above is deleted")
        if (!deletedRecipe) {
            return res.status(400).json({Message: `Recipe to delete not found.`})
        }
        console.log(`Deleted the recipe: ${deletedRecipe}`)
        res.sendStatus(200) // a simple success
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }

}

