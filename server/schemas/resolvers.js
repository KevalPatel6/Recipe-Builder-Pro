const { User, Ingredient, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            console.log(context.user)
            let result = await User.findOne({ _id: context.user._id }); //populate recipes??
            console.log(result)
            return result
        },

        // find by username or find by id??
        getProfile: async (parent, { username }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        getIngredient: async (parent, { ingredientId }, context) => {
            console.log(ingredientId)
            return Ingredient.findOne({ _id: ingredientId }); // sort or filter here??
        },
        getIngredients: async (parent, args) => {
            // console.log(name, group)
            return Ingredient.find({}); // sort or filter here??
        },
        getRecipe: async (parent, { recipeId }) => {
            console.log(recipeId)
            let result = await Recipe.findOne({ _id: recipeId });
            console.log(result)
            return result
        },


        getRecipeGroup: async (parent, { group }) => {
            // console.log(recipeId)
            return Recipe.find({ group: group });
        },
        getIngredientGroup: async (parent, { group }) => {
            // console.log(recipeId)
            return Ingredient.find({ group: group });
        },


        getSavedRecipes: async (parent, args, context) => {
            // console.log(recipeId)
            let result = await User.findOne({ _id: context.user._id }).populate('savedRecipes');
            console.log(result)

            return result
        },

        getCreatedRecipes: async (parent, { recipeId }, context) => {
            console.log(recipeId)
            let result = await User.findOne({ _id: context.user._id }).populate('createdRecipes');
            console.log( result)
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
            console.log(email, password)
            const user = await User.findOne({ email })
            console.log(user)
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
                console.log(typeof recipeId)
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
                console.log(result)
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

                console.log(updatedUser)
                // on the logged in user update a property of created recipes add to set
                // context.user.recipeList.push(newRecipe);
                // await context.user.save();

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