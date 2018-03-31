import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CartService } from '../cart.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    products;
    keyword;
    subcats;
    matched = [];
    selectedCats = [];
    priceFrom = 0;
    priceTo = 20000;
    originalProducts = [];
    userId;

    constructor(
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
        private router: Router,
        private cartservice: CartService,
        private loginservice: LoginService
    ) {
        this.route.params.subscribe((params: Params) => {
            this.keyword = params.keyword;
            this.categoriesService.searchProducts(this.keyword).subscribe((res) => {
                this.products = res;
                this.matched = [];
                for (let i = 0; i < this.products.length; i++) {
                    this.matched.push(this.products[i]);
                }
                console.log(this.matched);

            });
        });
    }

    ngOnInit() {
        this.categoriesService.getSubcats().subscribe((res) => {
            this.subcats = res;
        });
    }

    catFilter(e, id) {
        if (!e.target.children[0].checked) {
            this.selectedCats.push(id);
        }
        else {
            for (let i = 0; i < this.selectedCats.length; i++) {
                if (this.selectedCats[i] == id) {
                    this.selectedCats.splice(i, 1);
                    break;
                }
            }
        }
        this.filter();
    }

    filter() {

        this.matched = [];
        if (this.selectedCats.length != 0) {

            for (let i = 0; i < this.selectedCats.length; i++) {
                for (let j = 0; j < this.products.length; j++) {
                    if (this.products[j].subcat == this.selectedCats[i] && (this.products[j].price >= this.priceFrom && this.products[j].price <= this.priceTo)) {

                        this.matched.push(this.products[j]);
                    }
                }
            }

        } else {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].price >= this.priceFrom && this.products[i].price <= this.priceTo) {
                    this.matched.push(this.products[i])
                }
            }
        }
    }

    addToCart(id) {
        this.loginservice.getUserInfo().subscribe((res) => {
            var { user } = res;
            this.userId = user.id;
            if (user.userType == "customer") {
                this.cartservice.addToCart(id, this.userId).subscribe((err) => {

                });
            }else{
                this.router.navigate(['/login']);
            }

        });

    }
}


