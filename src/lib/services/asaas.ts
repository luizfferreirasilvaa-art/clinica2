/**
 * Asaas Integration Service (Mock/Template)
 * 
 * This file serves as the foundation for integrating with the Asaas API.
 * In a real-world scenario, these calls would be made from a secure backend (like Supabase Edge Functions)
 * to avoid exposing the ASAAS_API_KEY on the client-side.
 */

// Types representing Asaas data structures
export interface AsaasCustomer {
    id?: string;
    name: string;
    cpfCnpj: string;
    email: string;
    phone?: string;
    mobilePhone?: string;
    postalCode?: string;
    addressNumber?: string;
}

export interface AsaasSubscription {
    customer: string; // Customer ID
    billingType: 'CREDIT_CARD' | 'BOLETO' | 'PIX';
    value: number;
    nextDueDate: string;
    cycle: 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY';
    description?: string;
    creditCard?: {
        holderName: string;
        number: string;
        expiryMonth: string;
        expiryYear: string;
        ccv: string;
    };
    creditCardHolderInfo?: {
        name: string;
        email: string;
        cpfCnpj: string;
        postalCode: string;
        addressNumber: string;
        addressComplement: string;
        phone: string;
    };
}

export const AsaasService = {
    /**
     * Creates a new customer in Asaas.
     */
    createCustomer: async (customerData: AsaasCustomer): Promise<{ id: string } | null> => {
        console.log('Mock: Creating Asaas customer', customerData);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return { id: `cus_${Math.random().toString(36).substring(7)}` };
    },

    /**
     * Creates a new recurring subscription in Asaas.
     */
    createSubscription: async (subscriptionData: AsaasSubscription): Promise<{ id: string, status: string } | null> => {
        console.log('Mock: Creating Asaas subscription', subscriptionData);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        return {
            id: `sub_${Math.random().toString(36).substring(7)}`,
            status: 'ACTIVE'
        };
    },

    /**
     * Generates a PIX QR Code for an immediate payment.
     */
    generatePixQrCode: async (value: number, description: string): Promise<{ encodedImage: string, payload: string } | null> => {
        console.log('Mock: Generating PIX QR Code', { value, description });
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            encodedImage: 'base64_encoded_qr_code_mock',
            payload: '00020126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5913Mock Receiver6008SAO PAULO62070503***6304E2D1'
        };
    },

    /**
     * Fetches the current status of a payment/subscription.
     */
    getPaymentStatus: async (paymentId: string): Promise<{ status: 'PENDING' | 'RECEIVED' | 'OVERDUE' | 'CONFIRMED' }> => {
        console.log(`Mock: Fetching status for payment ${paymentId}`);
        return { status: 'RECEIVED' };
    }
};
