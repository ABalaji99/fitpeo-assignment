import userimg from '../utils/johndoe.jpeg';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import user1 from '../utils/user2.jpeg'
import user2 from '../utils/user3.jpeg'
import user3 from '../utils/user4.jpeg'
import user4 from '../utils/user5.jpg'
import user5 from '../utils/user6.jpg'


export const fitpeoData = [
  {
    id: 0,
    userName: 'John Doe',
    userIcon: userimg,
    categoryIcon: CrisisAlertOutlinedIcon,
    categoryTitle: 'Goals',
    user:user1,
    cticonclr:'#e66022',
    ctbgclr:'#5e3237',
    ayicon: ShoppingCartOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: true,
    aychange: 3,
    aytheme:'#2b3266',
    ayicontheme:'#3f62fc',
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
    user:user2,
    cticonclr:'#637ee0',
    ctbgclr:'#283266',
    ayicon: LocalShippingIcon,
    aytitle: 'Total Delivered',
    ayscore: 70,
    aytheme:'#165246',
    ayicontheme:'#00c98d',
    aystatus: false,
    aychange: 3,
    ratinguser:'Kate Nelson',
    userRating:3.8,
    userreview:'I love the chic and modern design of these items. They fit perfectly with my home decor.'

  },
  {
    id: 2,
    categoryIcon: MenuBookOutlinedIcon,
    categoryTitle: 'Menus',
    user:user3,
    cticonclr:'#219acf',
    ctbgclr:'#214b61',
    ayicon: RemoveShoppingCartTwoToneIcon,
    aytitle: 'Total Canceled',
    ayscore: "05",
    aytheme:'#5e3237',
    ayicontheme:'#f25e5e',
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
    cticonclr:'#e66022',
    ctbgclr:'#5e3237',
    user:user4,
    ayicon: LocalAtmIcon,
    aytitle: 'Total Revenu',
    ayscore: "$12k",
    aytheme:'#5c2a4a',
    ayicontheme:'#e841a0',
    aystatus: false,
    aychange: 3,
    ratinguser:'Albert',
     userRating:4.5,
    userreview:'I have received so many compliments on these items. They are stylish and functional, a perfect combination.'
  },

];
