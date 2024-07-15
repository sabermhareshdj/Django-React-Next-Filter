// zustand store for state managment

import { create } from 'zustand'



const productsStore = create((set) => ({
  products: [],
  categories: [],
  filters:{
    categories:[],
    price_range:[0,5000],
  },
  setproducts: (products) => set({ products }),
  setcategories: (categories) => set({ categories }),
}));

export default productsStore;




