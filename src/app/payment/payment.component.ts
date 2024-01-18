import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentForm!: FormGroup;
  message!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      beneficiaryName: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      checkNumber: ['', Validators.required],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      // Récupérez les données du formulaire et traitez le paiement par chèque
      const formData = this.paymentForm.value;
      console.log('Payment details:', formData);
      // Ajoutez ici la logique pour traiter le paiement par chèque
    }
  }

  onPaymentCheck() {
    this.message = "Votre commande sera traitée après réception de votre chèque";
  }
}
