import userimg from '../utils/johndoe.jpeg';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export const fitpeoData = [
  {
    id: 0,
    userName: 'John Doe',
    userIcon: userimg,
    categoryIcon: CrisisAlertOutlinedIcon,
    categoryTitle: 'Goals',
    ayicon: ShoppingCartOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: false,
    aychange: 3,
    profittitle:'Net Profit',
    profittotal:6759.35,
    profitstatus:true,
    profitchange:3,
    ratinguser:'Jenny Wilson',
    userRating:4,
    userreview:'These lifestyle products have elevated my daily routine. The quality is exceptional!'
  },
  {
    id: 1,
    categoryIcon: LocalDiningOutlinedIcon,
    categoryTitle: 'Popular Dishes',
    ayicon: LocalShippingOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: true,
    aychange: 3,
    ratinguser:'Kate Nelson',
    userRating:3.8,
    userreview:'I love the chic and modern design of these items. They fit perfectly with my home decor.'

  },
  {
    id: 2,
    categoryIcon: MenuBookOutlinedIcon,
    categoryTitle: 'Menus',
    ayicon: ShoppingCartOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: true,
    aychange: 3,
    ratinguser:'Robet Will',
     userRating:4.5,
    userreview:'The functionality of these products is amazing. They have made my life so much more convenient.'
  },
  {
    id: 3,
    categoryIcon: CrisisAlertOutlinedIcon,
    categoryTitle: 'Goals',
    ayicon: ShoppingCartOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: true,
    aychange: 3,
    ratinguser:'Albert',
     userRating:4.5,
    userreview:'I have received so many compliments on these items. They are stylish and functional, a perfect combination.'
  },
];
