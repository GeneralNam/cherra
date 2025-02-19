

import Aproduct from './components/aproduct'

let products = [
  {
    id: 1,
    name: "CHERRA BLACK",
  },
  {
    id: 2,
    name: "CHERRA BROWN",
  },
  {
    id: 3,
    name: "CHERRA KHAKI",
  },
]


export default function Product() {


  return (
    <div className=" px-10 pt-20 pb-72">
      <h1 className="text-8xl font-bold pb-10">Umbrella</h1>
    
      <Aproduct products={products} />
    </div>
  );
}
