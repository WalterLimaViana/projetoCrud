import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.module";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: undefined,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancelar(): void {
    this.router.navigate(["/products"]);
  }
}
