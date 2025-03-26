import { Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { ShopComponent } from './home/shop/shop.component';
import { ListComponent as customers } from './home/customers/list/list.component';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent as listCategories } from './home/categories/list/list.component';
import { EditComponent as editCategory } from './home/categories/edit/edit.component';
import { CreateComponent as createCategory } from './home/categories/create/create.component';
import { ListComponent as listEmployees } from './employees/list/list.component';
import { EditComponent as editEmployees } from './employees/edit/edit.component';
import { ShowComponent as showEmployees } from './employees/show/show.component';
import { CreateComponent as createEmployee } from './employees/create/create.component';
import { ShowComponent as showCustomers} from './home/customers/show/show.component';
import { PointOfSaleComponent } from './sales/point-of-sale/point-of-sale.component';
import { userGuardGuard } from './auth/guard/user-guard.guard';
import { StoreComponent } from './home/store/store.component';
import { ListComponent as productsList } from './home/products/list/list.component';
import { CreateComponent as createProduct } from './home/products/create/create.component';
import { EditComponent as editProduct } from './home/products/edit/edit.component';
import { ShowComponent as showProduct } from './home/products/show/show.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
//home
{path:'', component:MainComponent, canActivate:[userGuardGuard]},

//customers
{path:'customers', component:customers, canActivate:[userGuardGuard]},
{path:'customers/show', component:showCustomers, canActivate:[userGuardGuard]},

//employees
{path:'employees/list', component: listEmployees, canActivate:[userGuardGuard]},
{path:'employee/show', component: showEmployees, canActivate:[userGuardGuard]},
{path:'employee/edit', component: editEmployees, canActivate:[userGuardGuard]},
{path:'employee/create', component: createEmployee, canActivate:[userGuardGuard]},

// point of sale
{path:'sales', component: PointOfSaleComponent, canActivate:[userGuardGuard]},

//orders
{path:'orders/list', component:ShopComponent, canActivate:[userGuardGuard]},

// shoppings history
{path:'history', component:ShopComponent, canActivate:[userGuardGuard]},

//store - products
{path:'store', component:StoreComponent, canActivate:[userGuardGuard]},
{path:'products/list', component:productsList, canActivate:[userGuardGuard]},
{path:'product/create', component:createProduct, canActivate:[userGuardGuard]},
{path:'product/edit', component:editProduct, canActivate:[userGuardGuard]},
{path:'product/show', component:showProduct, canActivate:[userGuardGuard]},
//categories
{path:'categories/list', component:listCategories, canActivate:[userGuardGuard]},
{path:'categories/create', component:createCategory, canActivate:[userGuardGuard]},
{path:'categories/edit', component:editCategory, canActivate:[userGuardGuard]},

//auth
{path:'login', component:LoginComponent, canActivate:[userGuardGuard]},

//profile
{path:'profile', component:ProfileComponent, canActivate:[userGuardGuard]}
];
