export interface CartItem {
  name: string;
  price: number;
  qty?: number;
}

interface Cart {
  length: number;
  total: number;
  items: CartItem[];
  addItem: (item: CartItem) => Cart;
  add: (
    name: string,
    price: number,
    qty?: number,
  ) => Cart;
}

export function cashier(): Cart {
  return {
    items: [],
    get length() {
      return this.items.length;
    },
    get total() {
      return this.items.reduce((sum, next) => {
        return sum + next.price;
      }, 0)
    },
    addItem: function(item: CartItem) {
      if (item.qty) {
        for (let index = 0; index < item.qty; index++) {
          this.items.push(item);
        }
      } else {
        this.items.push(item);
      }
      return this;
    },
    add: function(name, price, qty){
      this.addItem({
        name,
        price,
        qty,
      });
      return this;
    },
  };
}
