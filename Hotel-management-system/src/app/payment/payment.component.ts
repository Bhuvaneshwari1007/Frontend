import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentHandler: any = null;
  constructor(private router:Router ) {}
  ngOnInit() {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MbpUBSJVVmPk2zjcAvRylLCYULUyFCEnMfNa4Z95K1dAryTw4R5MPv30CBju2mGU4loLc5N22xI5H2aApbrptDG00HjUFSbVS',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Payment Successful!!!');
      },
    });
    paymentHandler.open({
      name: 'Payment',
      // description: '3 widgets',
      // amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MbpUBSJVVmPk2zjcAvRylLCYULUyFCEnMfNa4Z95K1dAryTw4R5MPv30CBju2mGU4loLc5N22xI5H2aApbrptDG00HjUFSbVS',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  navigate() {
    var role = JSON.parse(localStorage.getItem('currentRole')!);
    console.log(role)
    if (role.role == 'ROLE_OWNER') { 
      this.router.navigate(['owner']); 
    } else if (role.role == 'ROLE_MANAGER') { 
      this.router.navigate(['manager']); 
    } else if (role.role == 'ROLE_RECEPTIONIST') { 
      this.router.navigate(['receptionist']); }
  }

}
