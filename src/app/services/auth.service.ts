import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Personal + company data collected on the registration form. Held in
// sessionStorage between /register and the plan-selection step, since the
// actual account isn't created until payment is confirmed (see registerBusiness).
export interface BusinessRegistrationDraft {
  firstName: string;
  lastName: string;
  dni: string;
  phoneNumber: string;
  username: string;
  password: string;
  companyName: string;
  ruc: string;
  legalType: string;
  companyPhone: string;
  companyEmail: string;
  street: string;
  city: string;
  district: string;
}

export interface RegisterBusinessResponse {
  checkoutUrl: string;
  pendingRegistrationId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly DRAFT_KEY = 'spottrack_pending_business';

  constructor(private http: HttpClient) {}

  stagePendingRegistration(draft: BusinessRegistrationDraft): void {
    sessionStorage.setItem(this.DRAFT_KEY, JSON.stringify(draft));
  }

  getPendingRegistration(): BusinessRegistrationDraft | null {
    const raw = sessionStorage.getItem(this.DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  clearPendingRegistration(): void {
    sessionStorage.removeItem(this.DRAFT_KEY);
  }

  // Sends the full registration form plus the chosen plan in one request.
  // The backend creates a pending registration and starts a Stripe checkout;
  // the real IAM account and admin profile are created later by the payment
  // webhook, once checkout completes.
  registerBusiness(draft: BusinessRegistrationDraft, membershipTier: string): Observable<RegisterBusinessResponse> {
    return this.http.post<RegisterBusinessResponse>(
      `${environment.backendUrl}/api/v1/register-business`,
      {
        email: draft.username,
        password: draft.password,
        firstName: draft.firstName,
        lastName: draft.lastName,
        phoneNumber: draft.phoneNumber,
        dni: draft.dni,
        companyName: draft.companyName,
        ruc: draft.ruc,
        legalStructure: draft.legalType,
        companyPhone: draft.companyPhone,
        companyEmail: draft.companyEmail,
        streetAddress: draft.street,
        city: draft.city,
        district: draft.district,
        membershipTier,
      }
    );
  }
}
