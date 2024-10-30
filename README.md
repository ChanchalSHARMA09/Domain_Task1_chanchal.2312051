# ShopMart- 
## An eCommerce Platform

Welcome to ShopMart, a dynamic eCommerce platform where users can browse, add items to their wishlist, and make purchases with a smooth and user-friendly experience. This README provides an overview of the features, functionality, and setup instructions for running the project locally.


## Table of Content

- Features
- Pages
- State Management & LocalStorage
- Usage
- Technologies Used
 

## Features

- User Navigation: Easy access to essential pages like Home, Cart, and Wishlist.
- Dynamic Product Carousel: An infinite product display with interactive product cards.
- Persistent Data: Cart and wishlist items are stored locally, providing a seamless user experience even on page reloads.
- Interactive Cart & Wishlist: Add, update, and remove items with real-time data updates.
## Pages

1. Home Page
- Navigation: Access links to Home, Cart, and Wishlist.
- Product Carousel: A circular queue-based infinite carousel displaying a variety of products.
- Product Cards: Each card includes:
     -  Like Button: Allows users to add/remove products from their wishlist.
  - Add to Cart Button: Adds the product to the cart with a default quantity of 1.  

2. Cart Page

- Product Details: Displays added products with relevant information, including name, image, quantity, and price.
- Total Price Calculation: Calculates the total price in real time based on the selected quantity of each item.
- Update Cart Functionality: Users can adjust quantities for each item, with changes reflected in both localStorage and application state.
 3. Wishlist Page
   - Wishlist Overview: Displays all wishlist items with individual product details.
   - Add to Cart Button: Moves individual products from the wishlist to the cart.
   - Remove Icon: Allows users to remove items from their wishlist.
   - Add All to Cart: Bulk action to add all wishlist items to the cart at once.


## State Management & LocalStorage

- Persistent Storage: Cart and wishlist data are saved in localStorage to maintain user preferences and data across sessions.
- Dynamic Updates: State is updated dynamically when users interact with items, ensuring all changes are reflected immediately in both the UI and local storage.

## Usage

- Browse Products: Explore various products via the home page carousel.
- Add to Wishlist: Save products to the wishlist for later consideration.
- Add to Cart: Add items to the cart for purchase, with the ability to update quantities as needed.
- Check Wishlist: View wishlist items and easily move them to the cart when ready.
- Checkout: View cart details and proceed with the checkout process (to be integrated).

## Technologies Used

- Frontend: React, CSS (with Tailwind CSS)
- State Management: React hooks, LocalStorage
- Build Tool: Vite

  
