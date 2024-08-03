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
    aystatus: true,
    aychange: 3,
    profittitle:'Net Profit',
    profittotal:6759.35,
    profitstatus:true,
    profitchange:3,
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
  },
  {
    id: 3,
    ayicon: ShoppingCartOutlinedIcon,
    aytitle: 'Total Orders',
    ayscore: 75,
    aystatus: true,
    aychange: 3,
  },
];
