const { User, Ingredient, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            console.log(context.user)
            let result = await User.findOne({ _id: context.user._id }); 
            console.log(result)
            return result
        },

        getProfile: async (parent, { username }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedRecipes');
            }
            throw AuthenticationError;
        },
        getIngredient: async (parent, { ingredientId }, context) => {
            console.log(ingredientId)
            return Ingredient.findOne({ _id: ingredientId }); 
        },
        getIngredients: async (parent, args) => {
            return Ingredient.find({}); 
        },
        getRecipe: async (parent, { recipeId }) => {
            console.log(recipeId)
            let result = await Recipe.findOne({ _id: recipeId }).populate('ingredients');
            console.log(result)
            return result
        },

        getAllRecipes: async (parent, args, context) => {
            return Recipe.find({}).populate('ingredients');
        },


        getRecipeGroup: async (parent, { group }) => {
            return Recipe.find({ group: group });
        },
        getIngredientGroup: async (parent, { group }) => {
            return Ingredient.find({ group: group });
        },


        getSavedRecipes: async (parent, args, context) => {
            let result = await User.findOne({ _id: context.user._id }).populate('savedRecipes');
            return result
        },

        getCreatedRecipes: async (parent, { recipeId }, context) => {
            let result = await User.findOne({ _id: context.user._id }).populate('createdRecipes');
            return result
        },
    },


    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }
            console.log(correctPw)
            const token = signToken(user);

            return { token, user };
        },

        addIngredient: async (parent, { ingredientData }, context) => {
            if (context.user) {
                const ingredient = await Ingredient.create(ingredientData);

                return ingredient;
            }
            throw AuthenticationError;
        },

        saveRecipes: async (parent, { recipeId }, context) => {
            if (context.user) {
                let result = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: {
                            savedRecipes:
                                recipeId

                        },
                    },

                    {
                        new: true,
                        runValidators: true,
                    }
                ).populate("savedRecipes");
                return result
            }
            throw AuthenticationError;
        },

        addRecipe: async (parent, { title, description, ingredients, instructions, servings, totalTime, imageUrl, group }, context) => {
            if (context.user) {
                const newRecipe = await Recipe.create({

                    title,
                    description,
                    ingredients,
                    instructions,
                    servings,
                    totalTime,
                    imageUrl,
                    group

                });
            
                const updatedUser = await User.findOneAndUpdate(
                 
                    { _id: context.user._id },
                    {
                        $addToSet: {createdRecipes: newRecipe._id  },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                ).populate("savedRecipes");

                return newRecipe;
            }
            throw AuthenticationError;

        },

        updateRecipe: async (parent, { id }, context) => {
            if (context.user) {
                return Recipe.findOneAndUpdate(
                    { _id: recipeId },
                    {
                        $addToSet: {
                            recipeList: { title, description, ingredients, servings, totalTime, imageUrl, group },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },

        removeRecipe: async (parent, { recipeId }, context) => {

            if (context.user) {


                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedRecipes: { recipeId } } },
                    { new: true, runValidators: true },
                );

                return updatedUser
            }

            throw AuthenticationError;
        },

        removeIngredient: async (parent, { ingredientId }, context) => {

            if (context.user) {


                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { ingredientList: { ingredientId } } },
                    { new: true, runValidators: true },
                );

                return updatedUser
            }


            throw AuthenticationError;
        }
    }
}


module.exports = resolvers;