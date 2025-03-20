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
{path:'customers', component:customers},
{path:'customers/show', component:showCustomers},

//employees
{path:'employees/list', component: listEmployees},
{path:'employee/show', component: showEmployees},
{path:'employee/edit', component: editEmployees},
{path:'employee/create', component: createEmployee},

// point of sale
{path:'sales', component: PointOfSaleComponent},

//orders
{path:'orders/list', component:ShopComponent},

// shoppings history
{path:'history', component:ShopComponent},

//store - products
{path:'store', component:StoreComponent},
{path:'products/list', component:productsList},
{path:'product/create', component:createProduct},
{path:'product/edit', component:editProduct},
{path:'product/show', component:showProduct},
//categories
{path:'categories/list', component:listCategories},
{path:'categories/create', component:createCategory},
{path:'categories/edit', component:editCategory},

//auth
{path:'login', component:LoginComponent},

//profile
{path:'profile', component:ProfileComponent}
];
