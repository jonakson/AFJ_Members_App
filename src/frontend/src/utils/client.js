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

export const getAllMembers = () =>
   fetch("api/v1/members")
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

export const getAllMemberships = () =>
   fetch("api/v1/memberships")
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