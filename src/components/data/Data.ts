import h1 from '../../../public/hero/h1.png'
import h2 from '../../../public/hero/h2.png'
import h3 from '../../../public/hero/h3.png'
import h4 from '../../../public/hero/h4.png'
import h5 from '../../../public/hero/h6.png'
import p1 from '../../assets/images/h1.webp'
import p2 from '../../assets/images/h2.webp'
import p3 from '../../assets/images/h9.webp'
import p4 from '../../assets/images/h4.webp'
import p5 from '../../assets/images/h10.webp'
import p6 from '../../assets/images/h11.webp';
import city1 from '../../../public/location/city-1.png'
import city2 from '../../../public/location/city-2.png'
import city3 from '../../../public/location/city-3.png'
import city4 from '../../../public/location/city-4.png'
import city5 from '../../../public/location/city-5.png'
import city6 from '../../../public/location/city-6.png'


export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
]
export const featured = [
  {
    cover:h1,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover:h2,

    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover:h3,

    name: "Apartment",
    total: "300 Property",
  },
  {
    cover:h4,

    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover:h5,

    name: "Villa & Condo",
    total: "80 Property",
  },
]
export const list = [
  {
    id: 1,
    cover: p1 ,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: p2,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: p3,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: p4,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: p5,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: p6,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
]
export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city1,
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city2,
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city3
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city4,
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover:city5
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city6
  },
]