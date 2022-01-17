import fetch from 'unfetch';

const checkStatus = response => {
   if (response.ok) {
      return response;
   }
   // convert non-2xx HTTP responses into errors:
   const error = new Error(response.statusText);
   error.response = response;
   return Promise.reject(error);
}

// Members fetching methods.
export const getAllMembers = () =>
   fetch("api/v1/members")
      .then(checkStatus);

export const getMemberById = memberId =>
   fetch(`api/v1/members/${memberId}`)
      .then(checkStatus);

export const addNewMember = member =>
   fetch(
      "api/v1/members",
      {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(member)
      }
   ).then(checkStatus);

export const deleteMember = memberId =>
   fetch(
      `api/v1/members/${memberId}`,
      {method: 'DELETE'}
   ).then(checkStatus);

// Memberships fetching methods.
export const getAllMemberships = () =>
   fetch("api/v1/memberships")
      .then(checkStatus);

export const getMembershipById = membershipId =>
   fetch(`api/v1/memberships/${membershipId}`)
      .then(checkStatus);

export const addNewMembership = membership =>
   fetch(
      "api/v1/memberships",
      {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(membership)
      }
   ).then(checkStatus);

export const deleteMembership = membershipId =>
   fetch(
      `api/v1/memberships/${membershipId}`,
      {method: 'DELETE'}
   ).then(checkStatus);

// Activities fetching methods.
export const getAllActivities = () =>
   fetch("api/v1/activities")
      .then(checkStatus);

export const addNewActivity = activity =>
   fetch(
      "api/v1/activities",
      {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(activity)
      }
   ).then(checkStatus);

export const deleteActivity = activityId =>
   fetch(
      `api/v1/activities/${activityId}`,
      {method: 'DELETE'}
   ).then(checkStatus);

// Activities fetching methods.
export const getAllPayments = () =>
   fetch("api/v1/payments")
      .then(checkStatus);

export const addNewPayment = payment =>
   fetch(
      "api/v1/payments",
      {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(payment)
      }
   ).then(checkStatus);

export const deletePayment = paymentId =>
   fetch(
      `api/v1/payments/${paymentId}`,
      {method: 'DELETE'}
   ).then(checkStatus);