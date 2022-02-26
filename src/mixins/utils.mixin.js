export const getInitials = (firstName, lastName) => {
    let initials = "";
  
    if (firstName && firstName.length) {
      initials = firstName.charAt(0);
    }
  
    if (lastName && lastName.length) {
      initials += lastName.charAt(0);
    }
  
    return initials;
  };