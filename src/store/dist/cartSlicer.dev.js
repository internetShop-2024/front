"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateCartItem = exports.removeFromCart = exports.addToCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var saveToLocalStorage = function saveToLocalStorage(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

var loadFromLocalStorage = function loadFromLocalStorage() {
  try {
    var serializedState = localStorage.getItem("cart");

    if (serializedState === null) {
      return {
        cart: []
      };
    }

    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return {
      cart: []
    };
  }
};

var initialState = loadFromLocalStorage();
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: function addToCart(state, action) {
      var existingItem = state.cart.find(function (item) {
        return item.id === action.payload.id;
      });

      if (existingItem) {
        existingItem.counter += action.payload.counter;
      } else {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          counter: action.payload.counter
        });
      }

      saveToLocalStorage(state);
    },
    removeFromCart: function removeFromCart(state, action) {
      var index = state.cart.findIndex(function (item) {
        return item.id === action.payload.id;
      });

      if (index !== -1) {
        state.cart.splice(index, 1);
      }

      saveToLocalStorage(state);
    },
    updateCartItem: function updateCartItem(state, action) {
      var existingItem = state.cart.find(function (item) {
        return item.id === action.payload.id;
      });

      if (existingItem) {
        existingItem.counter -= action.payload.counter;

        if (existingItem.counter <= 0) {
          state.cart = state.cart.filter(function (item) {
            return item.id !== action.payload.id;
          });
        }
      }

      saveToLocalStorage(state);
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addToCart = _cartSlice$actions.addToCart,
    removeFromCart = _cartSlice$actions.removeFromCart,
    updateCartItem = _cartSlice$actions.updateCartItem;
exports.updateCartItem = updateCartItem;
exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;
var _default = cartSlice.reducer;
exports["default"] = _default;