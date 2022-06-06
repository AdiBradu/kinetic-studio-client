import { gql } from "@apollo/client";


export const GET_ALL_SERVICES= gql`
query{
  getAllServices {
    s_id
    service_name
    m_type_id
    mt_name
    appointments_number
    appointment_duration
    service_cost  
  }
}
`;

export const GET_ALL_PARTNERS= gql`
query{
  getAllPartners {
    p_id
    first_name
    last_name
    profile_picture_url
    m_types
    description
  }
}
`;

export const GET_PARTNER_CURRENT_SCHEDULE= gql`
query GetPartnerCurrentSchedule($id: Float){
  getPartnerCurrentSchedule(id: $id) {
    schedule_start
    schedule_end
  }
}
`;

export const GET_PARTNER_FILLED_TIME_SLOTS= gql`
query GetPartnerFilledTimeSlots($id: Float){
  getPartnerFilledTimeSlots(id: $id) {
    schedule_start
    schedule_end
  }
}
`;
