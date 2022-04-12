import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

const initialState = {
  returnRequests: { items: [] },
  loading: false,
  error: null,
};
const convertDate = (date) => {
  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year = ("000" + date.getFullYear()).slice(-4);
  return day + "-" + month + "-" + year;
};

export const getReturnRequestListAsync = createAsyncThunk(
  "returnRequest/getReturnRequestList",
  async (values, { rejectWithValue }) => {
    try {
      const date = new Date(values.returnDate);
      date.setDate(date.getDate() + 1);
      const response = await axiosClient.get("api/returnrequest/search", {
        params: {
          ...values,
          returnDate: values.returnDate ? date : values.returnDate,
        },
      });
      const processed = response.items.map((element) => {
        element.createdDate = convertDate(new Date(element.createdDate));
        if (element.returnDate)
          element.returnDate = convertDate(new Date(element.returnDate));
        else element.returnDate = "";
        return element;
      });
      return { ...response, items: processed };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const acceptReturnRequestAsync = createAsyncThunk(
  "returnRequest/acceptRequest",
  async (values, { rejectWithValue }) => {
    try {
      await axiosClient.put("api/returnrequest/accept/" + values.id);
      alert("Accept request successfully !");
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const deleteReturnRequestAsync = createAsyncThunk(
  "returnRequest/cancelRequest",
  async (values, { rejectWithValue }) => {
    try {
      await axiosClient.put("api/returnrequest/delete/" + values.id);
      alert("Cancel request successfully !");
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const returnRequestSlice = createSlice({
  name: "returnRequest",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReturnRequestListAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getReturnRequestListAsync.fulfilled, (state, action) => {
        state.returnRequests = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getReturnRequestListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer, actions } = returnRequestSlice;
export default reducer;
