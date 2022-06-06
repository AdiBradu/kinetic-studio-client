import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_ORDER = gql`
  mutation CreateCustomerOrder($firstName: String!, $lastName: String!, $phone: String!, $email: String!, $region: String!, $city: String!, $street: String!, $streetNumber: String!, $serviceId: Float!, $details: [OderDetailIn]){ 
    createCustomerOrder(firstName: $firstName, lastName: $lastName, phone: $phone, email: $email, region: $region, city: $city, street: $street, streetNumber: $streetNumber, serviceId: $serviceId, details: $details) {
      successful
      message    
    }
  }
`;