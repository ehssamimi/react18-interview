import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the asyncThunk
// export const fetchUserData = createAsyncThunk(
//     'users/fetchById',
//     async (userId, thunkAPI) => {
//         const response = await fetch(`https://api.example.com/users/${userId}`);
//         return await response.json();
//     }
// );
export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res)=> res.json());
})

// Create the slice
export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error:null
    },
    reducers: {
        // Your reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.loading = false;
                state.cocktails = action.payload.drinks;
            })
            .addCase(fetchCocktails.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload as any;
            });
    },
});

// Export the reducer, typically done as default export
export default cocktailSlice.reducer;
