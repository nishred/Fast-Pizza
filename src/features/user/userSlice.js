import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in

  //payload of the fulfilled state
  return { position, address };
});

// first argument is the action name and second argument is an async function that returns the payload

// the fetch address function will become the action creator function that we can use in our components to dispatch the action

// The async fn callback is basically the code that gets executed as soon as the action "user/fetchAddress" is dispatched

// The createAsyncThunk fn creates three new action types for us: "user/fetchAddress/pending", "user/fetchAddress/fulfilled", "user/fetchAddress/rejected"

//These new action types are for the promise states

//now we need to handle these cases in the reducers. this is how we connect thunks and reducers.

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;

        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.error = action.error.message;

        state.status = "error";
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;



//basically the fetchAddress function is an action creator